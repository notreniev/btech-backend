import { UserModel } from "../../domains/models/user.model";

export class LoginDto {
  name: string;
  email: string;
  password: string;

    static toUser(loginDto: LoginDto): UserModel {
        const newUser = new UserModel();
        newUser.name = loginDto.name;
        newUser.email = loginDto.email;
        newUser.password = loginDto.password;
        return newUser;
      }
}