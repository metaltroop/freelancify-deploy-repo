const Contact = require("../models/userSchema");


const createContactinfo=async(req,res)=>{
    console.log('userInfo',req.userInfo);
    try{
        const id=req.params.id;
        const body=req.body;
        const updateContact={ $set: {...body}};
        await Contact.findByIdAndUpdate(id,updateContact);
        res.status(200).json({message:"Successfully"});
        updateContact.updatedAt = Date.now();
    }catch(err){
        res.status(500).json({ message: "Internal server error",err});
    }
}

const getContactinfo=async(req,res)=>{
    try{
        const results = await Contact.find({});
        res.status(200).json({message:"Successfully geted",dashboards:results});
    }
    catch(err){
        res.status(500).json({ message: "Internal server error",err:detail});
    }
}
const getContactinfoById=async (req,res)=>{
    try{
        const id=req.params.id;
        const results=await Contact.findById(id);
        res.status(200).json({message:"Successfully geted", dashboards:results});
    }catch (err) {
        res.status(500).json({ message: "Internal server error",err});
    }
}
const deleteContactinfoById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}

module.exports={
    createContactinfo,
    getContactinfo,
    deleteContactinfoById,
    getContactinfoById
}