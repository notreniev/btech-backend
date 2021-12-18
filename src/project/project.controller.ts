import { Controller, Get, Param } from '@nestjs/common';
import { ProjectModel } from '../domains/models/project.model';
import { ProjectService } from './project.service';

@Controller('api/projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    getProjects():Promise<ProjectModel[]>{
        return this.projectService.getProjects();
    }

    @Get('/:id')
    async getProjectById(@Param('id') id: string):Promise<ProjectModel[]>{
        return await this.projectService.getProject(id);
    }

}
