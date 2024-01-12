const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { model } = mongoose;
const validator = require("validator");
const uuid = require("uuid");
let userCounter = 0;

const userSchema = new Schema({
  _id: {
    type: String,
    default: () => `Userid${++userCounter}`,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Not a Valid Email");
      }
    },
  },

  username: {
    type: String,
    required: [true, "please provide name"],
  },

  password: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    // required: true,
  },

  yearsOfExperience: {
    type: Number,
    // required: true,
  },

  gender: {
    type: String,
    // required: true,
    enum: ["Male", "Female", "Other"],
  },

  domain : {
    type: String,
    // required: true,
    enum: ["Web-Dev", "Video-Editing", "Python-Dev", "Logo-Design"],
  },

  portfolioLink: {
    type: String,
    validate: {
      validator: (value) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(value);
      },
      message: "Invalid URL format for portfolio link",
    },
    // required: true,
  },

  instagramLink: {
    type: String,
    validate: {
      validator: (value) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(value);
      },
      message: "Invalid URL format for portfolio link",
    },
    // required: true,
  },

  linkedinLink: {
    type: String,
    validate: {
      validator: (value) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(value);
      },
      message: "Invalid URL format for portfolio link",
    },
    // required: true,
  },

  contactNo: {
    type: Number,
   
    // required: [true, "Phone number is required"],
  },
  profileImage: {
    type: String,
    default: null,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users16", userSchema);
