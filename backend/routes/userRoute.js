const express = require('express')

const router = express.Router()

const {handleGetAllUser,handleGetUserById,handleDeleteUserById, handleAddUser, handleUpdateUser} = require('../controllers/userController')


router.route('/').get(handleGetAllUser).post(handleAddUser)

router.route('/:id').get(handleGetUserById).delete(handleDeleteUserById).patch(handleUpdateUser)

module.exports = router