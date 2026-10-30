import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({

    userName:{
        type:String,
        unique:[true , "username already has account"],
        minlength:[3, "user name atleast be of three character"],
        required:true
    },
    
    gmail:{
        type:String,
        unique:[true,  "gmail is already registered wiht another"],
        required:true
    },
    
    password:{
        type:String,
        minlength:[8, "password should atleast be of 8 character"],
        select:false,
        required:true
    }

},{timestamps:true})