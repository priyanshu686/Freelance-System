import mongoose from 'mongoose'

const TaskAssignSchema = new mongoose.Schema({
    TaskId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Task,
        required:true
    },
    AssignTo:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:User,
        required:Task
    }
})

const TaskAssign = mongoose.model("TaskAssign",TaskAssignSchema);

export default TaskAssign;