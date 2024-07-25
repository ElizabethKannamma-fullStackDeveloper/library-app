const mongoose=require("mongoose");

const memberSchema=new mongoose.Schema({
    id:String,
    name:String,
    email:String,
    contact:String,
    address:String
})

const Member=mongoose.model("Member",memberSchema);

module.exports=Member;