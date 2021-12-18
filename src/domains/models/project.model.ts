import { TaskModel } from "./task.model";
import { v4 as uuidv4 } from "uuid";

export type ProjectDocument = ProjectModel & Document;

export class ProjectModel{
    _id: string = uuidv4();
    title: string;
    tasks: TaskModel[] = []; 
}