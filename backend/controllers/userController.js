import User from '../models/user.js'

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
    if(!body){
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
    try{
        const reqId = req.params.id
        const body = req.body
        const updatedUser = await User.findByIdAndUpdate(reqId,{
            name: body.name,
            email: body.email,
            password:body.password,
            role: body.role,
        },{new: true})
        if(!updatedUser){
            return res.status(404).json({error: 'User not found'})
        }
        return res.json({status:'Updated Sucessfully', data:updatedUser})
    }catch(error){

    }
}


export { handleGetAllUser, handleGetUserById, handleDeleteUserById, handleAddUser, handleUpdateUser }