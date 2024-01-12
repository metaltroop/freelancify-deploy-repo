const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// const registerUser = async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(409).json({ message: "User is already exist" });
//     }
//     const userInfo = new User(req.body);
//     userInfo.password = await bcrypt.hash(password, 12);
//     await userInfo.save();
//     return res.status(201).json({ message: "Successfully registered" });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error", err });
//   }
// };

const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User is already exist" });
    }
    const userInfo = new User(req.body);
    userInfo.password = await bcrypt.hash(password, 12);
    await userInfo.save();
    return res.status(201).json({ message: "Successfully registered" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.ststus(403).json({ message: "Invalid Credentials" });
    }
    //password check
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }
    const userObject = {
      email,
      username: user.username,
      _id: user._id,
    };
    const jwtToken = jwt.sign(userObject, process.env.JWT_SECRET, {
      expiresIn: 2592000000,
    });

    userObject.jwtToken = jwtToken;
    res.status(200).json({ message: "Successful", data: userObject });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userInfo._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // 
    // const userObject = {
    //   email,
    //   username: user.username,
    //   _id: user._id,
    // };
   
    res.status(200).json({ message: "Successful", data: user });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const body = req.body;

    // Assuming you have a field like 'email' in your user schema for identification
    const user = await User.findOneAndUpdate({ email: req.userInfo.email }, { $set: body }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", data: user });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

const updateContactInfo = async (req, res) => {
  try {
    const { instagramLink, linkedinLink, contactNo } = req.body;

    // Assuming you have a field like 'email' in your user schema for identification
    const user = await User.findOneAndUpdate(
      { email: req.userInfo.email },
      { instagramLink, linkedinLink, contactNo, updatedAt: Date.now() },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Contact information updated successfully", data: user });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};


const getUsersByDomain = async (req, res) => {
  try {
    const {domain} = req.params;
    const users = await User.find({domain});

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found with the specified domain" });
    }

    const usersData = users.map(user => ({
      email: user.email,
      username: user.username,
      _id: user._id,
      fullName: user.fullName,
      portfolioLink: user.portfolioLink, 
      yearsOfExperience: user.yearsOfExperience,
      instagramLink: user.instagramLink,
      linkedinLink: user.linkedinLink,
      contactNo: user.contactNo
      // Add other fields you want to include
      // Add other fields you want to include
    }));

    res.status(200).json({ message: "Users fetched successfully", data: usersData });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

module.exports = {
  registerUser,
  login,
  getCurrentUser,
  updateUserProfile,
  updateContactInfo,
  getUsersByDomain
};
