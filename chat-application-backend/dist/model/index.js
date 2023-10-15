"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_DB || "";
mongoose_1.default
    .connect(MONGO_URL)
    .catch(err => console.log(err));
mongoose_1.default.connection
    .on('open', () => console.log('Database connected!'))
    .on('close', () => console.log('Database disconnected!'))
    .on('error', () => console.log('Database error!'));
const userSchema = new mongoose_1.default.Schema({
    email: 'string',
    password: 'string',
});
const messageSchema = new mongoose_1.default.Schema({
    data: 'string',
    to: 'string',
    from: 'string',
});
exports.User = mongoose_1.default.model('User', userSchema);
exports.Message = mongoose_1.default.model('Message', messageSchema);
