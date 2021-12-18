import { Schema } from "mongoose";
import { TaskModel } from "../models/task.model";

export const ProjectSchema = new Schema(
    {
        _id: String,
        title: String,
        tasks: { type: [], ref: TaskModel },
    },
    {
        collection: 'projects'
    }
)