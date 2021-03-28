const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://anshi:anshi@cluster0.bej5y.mongodb.net/User?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connection successfully made to database");
  }
);

const userRouter=require('./routes/User');

app.use('/user',userRouter);

app.listen(5000, () => {
  console.log("express server started");
});
