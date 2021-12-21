import { UserModel } from "../models/user.model";
import { Types } from 'mongoose';

export function getUserMock(){
    const user = new UserModel();
    user._id = new Types.ObjectId().toString();
    user.name = "Everton Silva",
    user.email = "everton.canez@gmail.com"
    user.password = '123456'

    return user;
}