import mongoose from "mongoose";

const projectsSchema =  new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required:true
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['planned',"in-progress",'completed','on-hold','cancelled'],
        default:'planned',
        required: true
    }
},{timestamps:true})

const Project = mongoose.model("Project",projectsSchema)

export default Project