import { Schema } from "mongoose";
import { ProjectModel } from "../models/project.model";
import { UserModel } from "../models/user.model";

export type UserDocument = UserModel & Document;

export const UserSchema = new Schema(
    {
        _id: String,
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