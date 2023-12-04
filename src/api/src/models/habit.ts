import mongoose, { Document } from 'mongoose';

export interface Habit extends Document {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
}

export const HabitSchema = new mongoose.Schema<Habit>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export const HabitModel = mongoose.model<Habit>('Habit', HabitSchema);
