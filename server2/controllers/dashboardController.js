
const Dashboard = require('../models/userSchema');


const createDashboard = async (req,res)=>{
console.log('userInfo',req.userInfo);
try{ const id = req.params.id;
    const body = req.body;
    const updateDoc = { $set: {...body}} ;
    updateDoc.updatedAt = Date.now();
    await Dashboard.findByIdAndUpdate(id, updateDoc);
    res.status(200).json({ message: "Created" });
}catch (err) {
    res.status(500).json({ message: "Internal server error",err});
}
}


const getDashboard=async (req,res)=>{
    try{
        const results = await Dashboard.find({});
        res.status(200).json({message:"Successful", dashboards:results});
    }catch (err) {
        res.status(500).json({ message: "Internal server error",err});
    }

}


const getDashboardById=async (req,res)=>{
    try{
        const id=req.params.id;
        const results=await Dashboard.findById(id);
        res.status(200).json({message:"Successful geted", dashboards:results});
    }catch (err) {
        res.status(500).json({ message: "Internal server error",err});
    }
}


const updateDashboardById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updateDoc = { $set: {...body}} ;
        updateDoc.updatedAt = Date.now();
        await Dashboard.findByIdAndUpdate(id, updateDoc);
        res.status(200).json({ message: "updated" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}


const deleteDashboardById = async (req, res) => {
    try {
        const id = req.params._id;
        await Dashboard.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }
}


module.exports={
    createDashboard,
    getDashboard,
    getDashboardById,
    updateDashboardById,
    deleteDashboardById
}