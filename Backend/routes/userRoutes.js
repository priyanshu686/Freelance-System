import express from "express";
import {addUser,login} from '../controllers/UserController.js';

const router=express.Router();

router.post('/add',addUser);
router.get('/login',login);

export default router;