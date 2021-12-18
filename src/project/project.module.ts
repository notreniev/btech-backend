import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from '../domains/schemas/project.schema';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Project', schema: ProjectSchema}])
    ],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}
