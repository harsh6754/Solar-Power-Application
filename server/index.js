import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRouter from './routes/admin.routes.js'
import connectDB from './DB/db.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import listingRouter from './routes/listing.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//Database Connection
connectDB();

const PORT = process.env.PORT || 3000;


app.get('/',(req,res) =>{
    res.json({msg:"Hello Baby ....."});
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });



app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use("/auth", authRouter);
app.use("/listing",listingRouter);