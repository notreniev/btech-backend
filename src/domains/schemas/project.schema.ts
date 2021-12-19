import { Schema, Types } from "mongoose";
import { TaskModel } from "../models/task.model";
import { UserModel } from "../models/user.model";

export const ProjectSchema = new Schema(
    {
        _id: String,
        title: String,
        tasks: { type: [], ref: TaskModel },
        user: { type: Types.ObjectId, ref: UserModel },
    },
    {
        collection: 'projects'
    }
)