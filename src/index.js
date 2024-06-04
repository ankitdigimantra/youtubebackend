// // require ('dotenv').config({path: './env'})
// import dotenv from 'dotenv';
// // import mongoose, { connect } from "mongoose";
// // import { DB_NAME } from "./constants";
// import connectDB from "./db/index.js";

// dotenv.config({
//   path: './env'
// })



// connectDB()

import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config({
  path: './env'
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at : ${process.env.PORT}`);
  })
})
.catch((err) =>{
  console.log("MONGO db connectetion failed !!!" , err);
})

// import express from "express";

// const app = express();

// // function connectDB(){}

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port $ {process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error, "Error connecting");
//     throw err;
//   }
// })();
