import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRouter from './routes/admin.js'
import connectDB from './DB/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//Database Connection
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.json({msg:"Hello Baby"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

app.use('/admin',adminRouter);