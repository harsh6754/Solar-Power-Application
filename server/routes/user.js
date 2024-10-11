import express from 'express';
import { deleteUser, getAllUser,getUser,UpdateUser } from '../controllers/user';

const router = express.Router();
const test = (req,res,next) =>{
    console.log('Middleware is working');
}

router.get('/getalluser', getAllUser)
router.get('/getuser/:id', getUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
export default router;