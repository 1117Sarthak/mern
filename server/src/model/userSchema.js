const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const dotenv=require('dotenv')

dotenv.config({path:'../config.env'})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  tokens:[{
    token:{ type: String, required: true }
  }]

});

userSchema.pre('save',async function(next){
  console.log("hello bcrypt function");
  if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password,12);
    this.cpassword= await bcrypt.hash(this.cpassword,12);
  }
  next();
})

userSchema.methods.generateAuthToken=async function(){
  try{
    let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens=this.tokens.concat({token:token});
  }
  catch(err){
    console.log(err)
  }
}

const user = new mongoose.model("USER", userSchema);
module.exports = user;
