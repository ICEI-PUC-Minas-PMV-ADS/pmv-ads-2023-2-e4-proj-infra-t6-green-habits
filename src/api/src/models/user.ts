import mongoose, { Document, Schema } from 'mongoose';
import { Habit, HabitSchema } from './habit';

interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    habits: Habit[];
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    habits: [HabitSchema],
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
