const express = require("express");
const router = express.Router();
const shoes = require("../models/Shoes");

// GET ALL SHOES
router.post("/addShoes",async(req,res) => {
    try{
        const{shoeName} = req.body;
        const shoe = new shoes({
            shoeName
        })
        const shoeAdded = await shoe.save();
        res.json(shoeAdded);
        console.log(req.body);
    }
    catch(error){
        res.status(500).send("Error")
    }
});

module.exports = router;
