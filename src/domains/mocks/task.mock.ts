import { TaskModel } from "../models/task.model";

export function getTasksMock(){
    const tasks = [];

    const task1 = new TaskModel();
    task1.description = 'Lorem ipsum dolor sit amet1';
    task1.createdAt = new Date();

    const task2 = new TaskModel();
    task2.description = 'Lorem ipsum dolor sit amet2';
    task2.createdAt = new Date();

    const task3 = new TaskModel();
    task3.description = 'Lorem ipsum dolor sit amet3';
    task3.createdAt = new Date();

    const task4 = new TaskModel();
    task4.description = 'Lorem ipsum dolor sit amet4';
    task4.createdAt = new Date();

    const task5 = new TaskModel();
    task5.description = 'Lorem ipsum dolor sit amet5';
    task5.createdAt = new Date();

    const task6 = new TaskModel();
    task6.description = 'Lorem ipsum dolor sit amet6';
    task6.createdAt = new Date();

    tasks.push(task1);
    tasks.push(task2);
    tasks.push(task3);
    tasks.push(task4);
    tasks.push(task5);
    tasks.push(task6);

    return tasks;
}