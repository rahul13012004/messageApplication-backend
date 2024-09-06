import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSSWORD}@cluster0.fg3kcbz.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with databse', error.message);
    }
}

export default Connection;