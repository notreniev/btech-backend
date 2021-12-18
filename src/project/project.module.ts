import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from '../domains/schemas/project.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Project', schema: ProjectSchema}])
    ]
})
export class ProjectModule {}
