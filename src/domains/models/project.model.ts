import { TaskModel } from "./task.model";
import { UserModel } from "./user.model";

export type ProjectDocument = ProjectModel & Document;

export class ProjectModel{
    _id?: string;
    title: string;
    tasks: TaskModel[] = [];
    done: TaskModel[] = [];
    user: UserModel;
}