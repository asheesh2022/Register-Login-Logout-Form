const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const userRouter  = require("./routers/user")

// const bcrypt = require('bcryptjs');
const app = express();


// const salt = bcrypt.genSaltSync(10);
// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// app.use(cors({credentials:true,origin:'http://localhost:3001'}));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded())
app.use(userRouter);
// app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://asheesh:asheesh123@cluster0.9wegzyq.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useUnifiedTopology: true
},()=>{
  console.log("db connected")
});






app.listen(4000 , ()=>{
  console.log("server is running ")
});
//
