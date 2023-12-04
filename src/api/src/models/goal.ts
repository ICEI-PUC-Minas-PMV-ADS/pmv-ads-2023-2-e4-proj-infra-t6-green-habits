import mongoose, { Document } from 'mongoose';

export interface Goal extends Document {
    id: string;
    title: string;
    completed: boolean
}

export const GoalSchema = new mongoose.Schema<Goal>({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false}
})

export const GoalModel = mongoose.model<Goal>('Goal', GoalSchema);