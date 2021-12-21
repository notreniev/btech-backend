import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';
import { LoginVo } from './vo/login.vo';
import * as bcrypt from 'bcrypt';

@Controller('api/auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  async signin(@Body() user: UserModel) {

    try {
      const { email, password } = user;
      const foundUser = await this.authService.validateUser(email);
      if (foundUser && this.matches(foundUser, password)) {
        delete foundUser.password;
        const token = jwt.sign({sub: foundUser.email, iss: 'todo-api'}, process.env.SECRET);
        const loginVo = new LoginVo(token, foundUser);
        return loginVo;

      } else {
        throw new HttpException({ message: 'Invalid Credentials' }, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException({ message: 'Unauthorized' }, HttpStatus.UNAUTHORIZED);
    }
  }

  private matches(user: UserModel, password: string){
    const hashCompare = bcrypt.compareSync(password, user.password);
    return hashCompare;
  }
}
