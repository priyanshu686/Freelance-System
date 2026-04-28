import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    pincode: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        default: ""
    },
    addressType: {
        type: String,
        enum: ["home", "work", "other"],
        default: "home"
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Number:{
        type:Number,
        required:true
    },
    Address:AddressSchema,
    EmailVerified:{
        type:Boolean,
        default:false,
    },
    NumberVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const User = mongoose.model("User",UserSchema);

export default User;
