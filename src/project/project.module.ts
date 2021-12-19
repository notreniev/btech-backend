import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from '../domains/schemas/project.schema';
import { UserSchema } from '../domains/schemas/user.schema';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {name: 'Project', schema: ProjectSchema},
                {name: 'User', schema: UserSchema}
            ]
        )
    ],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}
