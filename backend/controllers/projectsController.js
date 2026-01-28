import Project from "../models/projects.js";

const handleGetAllProject =async (req,res)=>{
    try{
        const allProject = await Project.find({})
        return res.status(200).json(allProject)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
const handleAddProject = async (req,res)=>{
    try{
        const body=req.body
        if(!body){
            return res.json("All fields are required")
        }
        const newProject = await Project.create({
            name:body.name,
            desc:body.descp,
            from:body.from,
            to:body.to,
            status:body.status
        })
        res.status(200).json({msg:"Project created sucessfuly:",project:newProject})
    }catch(error){
        return res.status(500).json('Server Error')
    }
    
}
const handleUpdateProjectbyId = async (req,res)=>{
    try{
        const body=req.body
        const updatedProject= await Project.findByIdAndUpdate(req.params.id,{
            name:body.name,
            desc:body.descp,
            from:body.from,
            to:body.to,
            status:body.status
        },{new:true})
        if(!updatedProject){
            return res.status(404).json("Project Not found") 
        }
        return res.status(200).json({msg:'Project Updated',project:updatedProject})
    }catch(error){
        res.error(error).json({msg:error.message})

    }
    
}
const handleGetProjectById = async (req,res)=>{
    const id=req.params.id
    const getProject = await Project.findById(id)
    if(!getProject){
        return res.status(404).json('Project not found')
    }
    return res.status(200).json(getProject)

}
const handleDeleteProjectById =async (req,res)=>{
    await Project.findByIdAndDelete(req.params.id)
    res.status(200).json("Project Deleted")
}

export {handleAddProject,handleGetAllProject,handleGetProjectById,handleDeleteProjectById,handleUpdateProjectbyId}