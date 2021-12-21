import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../db-test.module';
import { UserSchema } from '../domains/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [rootMongooseTestModule(), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
