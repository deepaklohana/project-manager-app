import express from 'express'

import { handleAddProject,handleDeleteProjectById,handleGetAllProject, handleGetProjectById, handleUpdateProjectbyId } from '../controllers/projectsController.js'

const router = express.Router()

router.route('/').get(handleGetAllProject)

router.route("/add").post(handleAddProject)

router.route('/:id').get(handleGetProjectById)

router.route('/delete/:id').delete(handleDeleteProjectById)

router.route('/update/:id').patch(handleUpdateProjectbyId)

export default router