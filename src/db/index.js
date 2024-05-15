// import mongoose from 'mongoose';
// import { DB_NAME } from '../constants.js';

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
//         console.log(`\n MongoDB conneted !! DB Host: ${connectionInstance}`)
//     } catch (error) {
//         console.log("MongoDB connection error: " , error);
//         process.exit(1);
//     }
// }

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
}

export default connectDB;

