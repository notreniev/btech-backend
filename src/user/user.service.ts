import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../domains/models/user.model';
import { UserDocument } from '../domains/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}

    async create(user: UserModel): Promise<UserModel>{
        try {
            const hash = await bcrypt.hash(user.password, bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS)));
            user.password = hash;
            const dbResult = await this.userModel.create(user);
            dbResult.password = undefined;
            return dbResult;
        } catch (error) {
            throw error;
        }
    }

    async update(user: UserModel): Promise<UserModel>{
        const dbResult = await this.userModel.findOneAndUpdate({_id: user._id}, user, { new: true});
        return dbResult;
    }

    async findByEmail(user: string): Promise<UserModel>{
        const dbResult = await this.userModel
            .findOne({email: user})
            .select('_id name email password')
            .exec();
        return dbResult;
    }

    async findAll(): Promise<UserModel[]>{
        const dbResult = await this.userModel.find({});
        return dbResult;
    }

    async delete(userId: string): Promise<UserModel>{
        const dbResult =  await this.userModel.findOneAndDelete({_id: userId});
        return dbResult;
    }
}
