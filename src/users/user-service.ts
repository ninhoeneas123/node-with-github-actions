import mongoose, { Types } from 'mongoose';
import UserSchema from './models/user-model';


class UserService {

    async createUser(data: object) {
        const create = await UserSchema.create(data)
        return create
    }

    async listUsers() {
        const list = await UserSchema.find()
        return list
    }

    async listUser(id: string) {
        const list = await UserSchema.findById(id)
        return list
    }

    async removeUser(userId:string) {
        const remove = await UserSchema.deleteOne({_id:userId})
        return remove
    }
}

export default new UserService();