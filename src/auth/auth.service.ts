import { Injectable } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(user: UserModel) {
        const foundUser = await this.userService.findByEmail(user.email);
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
