const express = require('express');
const verify = require('../../verifyToken');
const db = require("../../database");
const upload_file = require('../../uploadFile');

const router = express.Router();

// Import the database model for the service_prod table
//get all service_prod
router.get("/get-all",async (req,res)=>{
    try {
        db.query("select * from service_prod;",(err,result)=>{
            if(err){
                console.log(err)
                res.status(501).json(err);
            }else{
                res.status(200).send(result)
            }
        })
    } catch (error) {
        
    }
});
//get product by service 
router.get("/get"/*,verify*/,async (req,res)=>{
    try {
        console.log(req.query,req.params);
        db.query("select * from service_prod where service_id = ?",req.query?.service_id,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json(err)
                return;
            }
            console.log(result);
            const promise_array = result.map((item) => 
                new Promise((resolve, reject) => {
                    db.query("select * from service_prod_img where service_prod_id = ?",item.id,(err,result)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        item.images = result;
                        resolve(item);

                    });

                  })

              );
              Promise.all(promise_array).then((data) => {
                res.status(200).send(data);
              });

        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})
//update data
router.post("/update"/*,verify*/,async (req,res)=>{
    try {
        console.log(req.body,req.files)
        if(req.files){
            for(const [key,value] of Object.entries(req.files)){
                if(key === "picture"){
                    let picture = upload_file(value,"service_prod",req.body.types.split(","),"picture");
                    db.query("update service_prod set image = ? where id = ?",[picture.data?.path,req.body.id],(err)=>{
                        if(err){
                            throw err;
                        }
                        })
                }else if(key.includes("images")){
                    let item = value;
                    item = upload_file(item,"service_prod_img",req.body.types.split(","),"picture");
                    db.query("insert into service_prod_img values (null,?,?) ",[item.data?.path,req.body?.id],(err)=>{
                        if(err){
                            throw err;
                        }
                    })
    
                }
            }
        }



        for(const [key,value] of Object.entries(req.body)){
            if(key.includes("delete")){
                db.query("delete from service_prod_img where id = ?",value,(err)=>{
                    if(err)
                        throw err;
                })
            }
            else if(key!=="id" && key!=="types" && !key.includes("images") &&  key!=="table" &&  key!=="service_id"  &&  key!=="type" && key!== "picture"){
                db.query("update service_prod set "+key+" = ? where id = ?",[value,req.body.id],(err)=>{
                    if(err){
                        throw err;
                    }
                })
            }
        }

        res.status(200).send("Image updated successfully !");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// CREATE a new service
router.post('/', async (req, res) => {
    const {service_id, name, description } = req.body;

    try {
        let picture = upload_file(req.files?.picture,"service_prod",req.body.types.split(","),"picture");

        db.query("INSERT INTO service_prod (name,description,service_id,image) VALUES (?,?, ?, ?)", [name,description,service_id,picture.data?.path], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
                return;
            }
            res.status(200).send("service_prod created successfully!");
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// DELETE a service by ID
router.delete('/:id', async (req, res) => {
    try {
        db.query("delete from service_prod where id = ?", [req.params.id], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
                return;
            }
            res.status(200).send("Service deleted successfully!");
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;