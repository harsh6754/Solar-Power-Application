import express from 'express';
import { deleteUser,updateUser,getUser,getAllUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
