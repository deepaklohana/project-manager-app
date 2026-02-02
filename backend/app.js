

import dotenv from "dotenv"
import express from 'express'
import connectDB from './config/db.js'
// import User from './models/user.js'
import userRouter from './routes/userRoute.js'
import projectRouter from './routes/projectsRoute.js'
// import taskRouter from './routes/taskRoute.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(express.json()); // JSON data handle karne ke liye
app.use(express.urlencoded({ extended: true })); // Form data handle karne ke liye
app.use(cors())
connectDB()

const PORT = process.env.PORT

app.use('/api/users',userRouter)
app.use('/api/projects',projectRouter)
// app.use('api/tasks',taskRouter)
app.listen(PORT,()=>{
    console.log(`🚀 Server runs on Port ${PORT}`,)
})


// const createAdmin = async () => {
//   await User.create({ name: "Admin", email: "admin@gmail.com",password: 'admin', role: "admin" });
// };

// createAdmin();