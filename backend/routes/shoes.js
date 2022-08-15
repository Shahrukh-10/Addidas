const express = require("express");
const router = express.Router();
const shoes = require("../models/Shoes");
const fetchuser = require("../middleware/fetchuser")
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

// GET ALL SHOES

router.get("/getAll",fetchuser,async(req,res) => {
    try{
        const shoeList = await shoes.find();
        res.status(200).send({shoeList,"success":true});
    }
    catch(error){
        res.status(500).send(error.message)
    }
});

// GET Product
 
router.get("/:id",async(req,res)=>{
    try {
        const prod = await shoes.findById(req.params.id);
        res.status(200).send({product:prod})
    } catch (error) {
        res.status(500).send(error.message);
    }
})




module.exports = router;
