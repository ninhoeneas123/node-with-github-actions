import { model, Schema } from 'mongoose';

interface UserInterface extends Document {
    name?: string
    email?: string
    password?: string
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export default model<UserInterface>('UserSchema', UserSchema)