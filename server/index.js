const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/db');

require('dotenv').config();

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