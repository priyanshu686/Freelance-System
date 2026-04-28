import express from 'express';
import {addProject,getProject} from'../controllers/ProjectController.js'
import {Auth} from '../middlewares/AuthToken.js'

const router = express.Router();

router.post('/add',Auth,addProject);
router.get('/get',Auth,getProject);

export default router;