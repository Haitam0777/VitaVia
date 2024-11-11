const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv") 
const db = require("./database")
const product = require("./routes/products/product")
const service = require("./routes/services/service")

const fileUpload = require('express-fileupload');
const unlink = require("fs").unlink;
const verify = require("./verifyToken");
const uploadFile = require("./uploadFile");

app.use(fileUpload({
    createParentPath: true
}));

dotenv.config();

app.listen(8800, ()=>{
    console.log("Backend Server is running!");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/product",product);
app.use("/api/service",service);

//admin login
app.post("/api/login",async (req,res)=>{
    try {
        db.query("select * from user where email = ?",[req.body.info.email],(err,result)=>{
            if(err){
                console.log(err)
                throw err;
            }else{
                if(!result[0]){
                    res.status(404).json("Account does not exist! ");
                    return
                }
                result = result[0];
                
                if(result.password !== req.body.info.password){
                    res.status(401).json("Wrong password or username! ");
                    return
                }

                const token = jwt.sign({id:result.id},"69i574935j0j1",{
                    expiresIn : "5d"
                });

                const {password,...info} = result;
                res.status(200).json({...info,token})
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

//get pictures links from database
app.post("/get-files", async (req, res) => {
    try {
        db.query("select * from "+req.body.table+" where page like ?", [req.body.page], (err, result) => {
            if (err) {
                console.log(err);
                res.status(501).json(err);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (error) {
        console.log(error);
        // Pas de réponse envoyée en cas d'erreur dans le bloc catch
    }
});
//update data
app.post("/set-files",verify,async (req,res)=>{
    try {
        console.log(req.body,req.files)
        picture = uploadFile(req.files?.picture,"products",req.body.types.split(","),"picture");
        db.query("select image from products where image = ?",picture.data?.path,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json(err)
                return;
            }
            if(!result[0]){
                db.query("select image from services where image = ?",picture.data?.path,(err,result2)=>{
                    if(err){
                        console.log(err)
                        res.status(500).json(err);
                        return
                    }
                    if(!result2[0]){
                        db.query("select image from "+req.body.table+" where id = ?",[req.body.id],(err,result3)=>{
                            if(err){
                                console.log(err)
                                res.status(500).send(err)
                                return
                            }
                            unlink(result3[0].image,(err)=>{
                                if(err){
                                    console.log(err)
                                }
                            })
                        })
                    }else{
                        unlink(result2[0].image,(err)=>{
                            if(err){
                                console.log(err)
                            }
                        })
                    }
                })
            }else{
                unlink(result[0].image,(err)=>{
                    if(err){
                        console.log(err)
                    }
                })
            }
            db.query("update "+req.body.table+" set image = ? where id = ?",[picture.data?.path,req.body.id],(err)=>{
                if(err){
                    console.log(err)
                    res.status(500).json(err);
                    return
                }
                res.status(200).send("Image updated successfully !");
            })

        })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})