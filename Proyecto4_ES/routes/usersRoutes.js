const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();


router.post("/users", async (req,res) => {
    const data = new Model({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email
    });
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});


router.get("/users", async (req,res) => {
   try{
        const data = await Model.find();
        res.status(200).json(data);
   }catch (error){
    res.status(500).json({message: error.message});
   }
});


router.get("/users/:id", async (req,res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    }catch (error){
     res.status(500).json({message: error.message});
    }
});


router.put("/users/:id", async (req,res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await Model.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(data);
    }catch (error){
     res.status(500).json({message: error.message});
    }
});


router.delete("/users/:id", async (req,res) => {
    try{
        const data = await Model.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    }catch (error){
     res.status(500).json({message: error.message});
    }
});


module.exports = router;