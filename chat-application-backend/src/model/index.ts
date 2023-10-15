import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MONGO_URL = process.env.MONGO_DB || "";

mongoose
.connect(MONGO_URL)
.catch(err => console.log(err))

mongoose.connection
.on('open', () => console.log('Database connected!'))
.on('close', () => console.log('Database disconnected!'))
.on('error', () => console.log('Database error!'))

const userSchema = new mongoose.Schema({
    email: 'string',
    password: 'string',
})

const messageSchema = new mongoose.Schema({
    data: 'string',
    to: 'string',
    from: 'string',
})

export const User = mongoose.model('User', userSchema)
export const Message = mongoose.model('Message', messageSchema)