const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const home=async (req,res)=>{
    try{
        res.status(200).send("Welcome to home page of backend of freelancifysphere");

    }catch(error){
console.log(error);
    }
};

const registerUser = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        //check if user is already exist or not
        const user = await User.findOne({ email });
        if (user) {
            return res.staus(409)
                .json({ message: "User is already exist" });
        }
        //user object
        const userInfo = new User(req.body);
        userInfo.password = await bcrypt.hash(password, 10);
        await userInfo.save();
        return res.status(201)
            .json({ message: "successful" });
    } catch (err) {
        res.status(500)
            .json({ message: "Internal server error" });
    }

}




module.exports={home, register};