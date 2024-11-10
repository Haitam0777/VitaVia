const express = require('express');
const verify = require('../../verifyToken')
const db = require("../../database");
const upload_file = require('../../uploadFile');

const router = express.Router();

// Import the database model for the services table
//get all services
router.get("/get-all",async (req,res)=>{
    try {
        db.query("select * from services;",(err,result)=>{
            if(err){
                console.log(err)
                res.status(501).json(err);
            }else{
                res.status(200).send(result)
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);   
    }
});
//get service by id 
router.post("/get"/*,verify*/,async (req,res)=>{
    try {
        console.log(req.body);
        db.query("select * from services where id = ?",req.body?.id,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json(err)
                return;
            }
            res.status(200).send(result[0]);

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
        if(req.files?.picture){
            let picture = upload_file(req.files?.picture,"services",req.body.types.split(","),"picture");
            db.query("update services set image = ? where id = ?",[picture.data?.path,req.body.id],(err)=>{
                if(err){
                    console.log(err)
                    throw err;
                }
                })
        }
        for(const [key,value] of Object.entries(req.body)){
            if(key!=="id" && key!=="types" &&  key!=="table"  &&  key!=="type" && key!== "picture"){
                db.query("update services set "+key+" = ? where id = ?",[value,req.body.id],(err)=>{
                    if(err){
                        console.log(err)
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
    const {page, name, description} = req.body;
    console.log(req.files,req.body?.type);
    try {
        let picture = upload_file(req.files?.picture,"services",req.body.types.split(","),"picture");

        db.query("INSERT INTO services (page,image,name, description) VALUES (?,?, ?, ?)", [page,picture?.data?.path,name, description], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
                return;
            }
            res.status(200).send("Service created successfully!");
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});


// DELETE a service by ID
router.delete('/:id', async (req, res) => {
    try {
        db.query("delete from services where id = ?", [req.params.id], (err, result) => {
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