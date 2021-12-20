import { Injectable } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string): Promise<UserModel> {
        const foundUser = await this.userService.findByEmail(email);
        if (foundUser) {
            return foundUser;
        }
        return null;
    }
}
