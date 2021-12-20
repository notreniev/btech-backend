import { Injectable } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string) {
        const foundUser = await this.userService.findByEmail(email);
        if (foundUser) {
        //   return await encrypt(foundUser);
            return foundUser;
        }
        // const createdUser = await this.usersService.create(user);
        // if (createdUser) {
        //   return await encrypt(createdUser);
        // }
        return null;
    }
}
