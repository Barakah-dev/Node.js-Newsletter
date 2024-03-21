const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewsletterSignUp");

const SignUpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

const SignUpCollection = new mongoose.model("SignUpCollection", SignUpSchema);

module.exports = SignUpCollection;