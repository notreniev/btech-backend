import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserSchema } from '../domains/schemas/user.schema';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { rootMongooseTestModule } from '../db-test.module';
import { AuthController } from './auth.controller';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [rootMongooseTestModule(), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
      providers: [AuthService, UserService],
      controllers: [AuthController]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
