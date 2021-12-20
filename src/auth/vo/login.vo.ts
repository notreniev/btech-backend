import { UserModel } from "../../domains/models/user.model";

export class LoginVo {
    token: string;
    user: UserModel;

    constructor(token: string, user: UserModel) {
        this.token = token;
        this.user = user;
    }
}