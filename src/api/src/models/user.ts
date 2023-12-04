import mongoose, { Document, Schema } from 'mongoose';
import { Habit, HabitSchema } from './habit';
import { Goal, GoalSchema } from './goal';

interface User extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    habits: Habit[];
    goals: Goal[]
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    habits: [HabitSchema],
    goals: [GoalSchema]
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
