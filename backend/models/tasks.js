import mongoose, { model } from "mongoose";

const taskSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    AssignUser:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending,pone,in-progress'],
        default:'pending',
        required:true,
    }
})

const Task = mongoose.model('Task',taskSchema)

export default  Task