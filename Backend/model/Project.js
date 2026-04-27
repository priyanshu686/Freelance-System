import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    ProjectName:{
        type:String,
        required:true
    },
    ProjectOwnweId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required:true
    },
    TechStack:{
        type:[String],
        required:true
    },
    Description:{
        type:String
    }
},{timestamps:true})

const Project = mongoose.model("Project",ProjectSchema);

export default Project;