import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    async signin(@Body() user: UserModel) {
        const result = await this.authService.validateUser(user);
        console.log('result', result)
        return result;
      }
}
