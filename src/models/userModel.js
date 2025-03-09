import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide username'],
        unique:true,
    },
    email:{
        type:String,
        required:[true,'enter an email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'password can not be empty']
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    verifyTokenExpiry:String,
    

});

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;