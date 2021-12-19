import { Schema } from "mongoose";
import { TaskModel } from "../models/task.model";
import { UserModel } from "../models/user.model";

export const ProjectSchema = new Schema(
    {
        title: String,
        tasks: { type: [], ref: TaskModel },
        user: { type: Schema.Types.ObjectId, ref: UserModel },
    },
    {
        collection: 'projects'
    }
)