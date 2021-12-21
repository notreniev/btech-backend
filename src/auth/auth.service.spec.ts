import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserSchema } from '../domains/schemas/user.schema';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { rootMongooseTestModule } from '../db-test.module';
import { AuthController } from './auth.controller';
import { getUserMock } from '../domains/mocks/user.mock';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [rootMongooseTestModule(), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
      providers: [AuthService, UserService],
      controllers: [AuthController]
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Validate user', () => {
    it('when user not exists should create ir and return user data and token', async () => {
      const mockedUser = getUserMock();
      const createdUser = await userService.create(mockedUser);
      const validatedUser = await service.validateUser(createdUser.email);
      expect(createdUser.name).toEqual(validatedUser.name);
      expect(createdUser.email).toEqual(validatedUser.email);
    });
  });
});
