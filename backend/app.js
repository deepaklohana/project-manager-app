const dotenv = require('dotenv')
const express = require('express')
const connectDB = require('./config/db.js')
const User = require('./models/user.js')
const userRouter = require('./routes/userRoute.js')


dotenv.config()
const app = express()
app.use(express.json())

connectDB()

const PORT = process.env.PORT

app.use('/api/users',userRouter)
app.listen(PORT,()=>{
    console.log(`Server runs on Port ${PORT}`,)
})


// const createAdmin = async () => {
//   await User.create({ name: "Admin", email: "admin@gmail.com",password: 'admin', role: "admin" });
// };

// createAdmin();