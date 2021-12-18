import { TaskModel } from "./task.model";

export class ProjectModel{
    _id: string;
    title: string;
    tasks: TaskModel[];
}