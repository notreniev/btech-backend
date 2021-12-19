import { Schema } from "mongoose";
import { UserModel } from "../models/user.model";

export type UserDocument = UserModel & Document;

export const UserSchema = new Schema(
    {
        name: String,
        username: String,
        birthday: String,
        email: String,
        password: String
    },
    {
        collection: 'users'
    }
);