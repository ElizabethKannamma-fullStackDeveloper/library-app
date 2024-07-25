const express = require("express");
const router = express.Router();
const Member = require("../Models/memberModel")

//POST: Add a new book
//api/teachers/

router.post("/", async (req, res) => {
    const member = new Member({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      address: req.body.address,
    });
  
    try {
      const saveMember = await member.save();
      res.send(saveMember);
    } catch (error) {
      res.status(400).send(error);
    }
  });


// GET: Get all members
///api/teachers/

router.get("/", async (req, res) => {
    try {
        const Members = await Member.find();
        res.send(Members);
    } catch (error) {
        res.status(400).send(error);
    }
});


//GET: Get member by id
//api/teachers/:id

router.get("/:id", async (req, res) => {
    try {
        const member= await Member.findById(req.params.id);
        res.send(member);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports=router;