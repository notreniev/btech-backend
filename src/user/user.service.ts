import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../domains/models/user.model';
import { UserDocument } from '../domains/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}

    create(project: UserModel): Promise<UserModel>{
        const dbResult = this.userModel.create(project);
        return dbResult;
    }

    async update(user: UserModel): Promise<UserModel>{
        const dbResult = await this.userModel.findOneAndUpdate({_id: user._id}, user, { new: true});
        return dbResult;
    }

    async findByEmail(user: string){
        const dbResult = await this.userModel
            .find({email: user})
            .select('_id name email')
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
