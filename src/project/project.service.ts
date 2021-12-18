import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getProjectsMock } from '../domains/mocks/project.mock';
import { ProjectDocument, ProjectModel } from '../domains/models/project.model';

@Injectable()
export class ProjectService {

    constructor(@InjectModel('Project') private readonly projectModel: Model<ProjectDocument>){}

    async getProject(projectId: string): Promise<ProjectModel[]>{
        const dbResult = await this.projectModel.find({_id: projectId});
        return dbResult;
    }

    async getProjects(): Promise<ProjectModel[]>{
        // const dbResult = await this.projectModel.find({});
        // return dbResult;
        return Promise.resolve(getProjectsMock());
    }

}

