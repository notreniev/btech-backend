import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectModel } from '../domains/models/project.model';
import { ProjectService } from './project.service';

@Controller('api/projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post()
    async create(@Body() project: ProjectModel): Promise<ProjectModel>{
        return await this.projectService.create(project);
    }

    @Patch('/:id')
    async update(@Body() project: ProjectModel): Promise<ProjectModel>{
        return await this.projectService.update(project);
    }

    @Get()
    getProjects():Promise<ProjectModel[]>{
        return this.projectService.getProjects();
    }

    @Get('/:id')
    async getProjectById(@Param('id') id: string):Promise<ProjectModel[]>{
        return await this.projectService.getProject(id);
    }

    @Get('/:userId/user')
    findByUserId(@Param('userId') userId: string):Promise<ProjectModel[]>{
        return this.projectService.findByUserId(userId);
    }

    @Delete('/:id')
    async remove(@Param('id') projectId: string){
        return await this.projectService.delete(projectId);
    }
}
