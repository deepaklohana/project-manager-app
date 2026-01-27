const User = require('../models/user')

const handleGetAllUser =async (req,res)=>{
    try{
        const allUser = await User.find({})
        res.status(200).json(allUser)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const handleGetUserById = async (req,res)=>{
    const getUser = await User.findById(req.params.id)
    if (!getUser){
        return res.status(404).json('User not found')
    }
    return res.json(getUser)
}

const handleDeleteUserById =async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json('User Deleted')
}

const handleAddUser = async (req,res)=>{
    try{
        const body =req.body
    if(!body || !body.name || !body.email|| !body.password || !body.role){
        return res.status(400).json("All fields are required")
    }
    const newUser = await User.create({
        name: body.name,
        email: body.email,
        password:body.password,
        role: body.role,
    })

    return res.status(200).json({ msg:'Sucessfully Added!', user : newUser})
    }catch(error){
        res.status(500).json('Server Error')
    }
}
const handleUpdateUser = async (req,res)=>{
        const reqId = req.params.Id
        const body = req.body
        await User.findByIdAndUpdate(reqId,{
            name: body.name,
            email: body.email,
            password:body.password,
            role: body.role,
        })
        return res.json({status:'Updated Sucessfully'})
}


module.exports = {handleGetAllUser,handleGetUserById,handleDeleteUserById,handleAddUser,handleUpdateUser}