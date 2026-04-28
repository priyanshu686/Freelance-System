import mongoose from 'mongoose';

const UserRoleSchema = new mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    UserType:{
        type:String,
        enum:["Freelancer" , "ProjectOwner"],
        required:true
    }
},{timestamps:true})

const UserRole = mongoose.model("UserRole",UserRoleSchema);

export default UserRole;