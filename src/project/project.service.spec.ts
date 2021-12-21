import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../db-test.module';
import { ProjectSchema } from '../domains/schemas/project.schema';
import { UserSchema } from '../domains/schemas/user.schema';
import { ProjectModule } from './project.module';
import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [rootMongooseTestModule(), ProjectModule, MongooseModule.forFeature([
        { name: 'Project', schema: ProjectSchema },
        { name: 'User', schema: UserSchema }
      ])],
      providers: [ProjectService],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
