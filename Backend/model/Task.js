import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    ProjectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:Project,
        required:true
    },
    TaskName:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        enum:["InProgress","Pending","Fullfilled"],
        default:"Pending"
    }
},{timestampls:true})

const Task = mongoose.model("Task",TaskSchema)

export default Task;