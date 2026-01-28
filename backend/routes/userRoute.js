import express from 'express'
import { 
    handleGetAllUser, 
    handleGetUserById, 
    handleDeleteUserById, 
    handleAddUser, 
    handleUpdateUser 
} from '../controllers/userController.js';

const router = express.Router()



router.route('/').get(handleGetAllUser)
router.route('/add').post(handleAddUser)
router.route('/get/:id').get(handleGetUserById)
router.route('/delete/:id') .delete(handleDeleteUserById)
router.route('/update/:id').patch(handleUpdateUser)

export default router

