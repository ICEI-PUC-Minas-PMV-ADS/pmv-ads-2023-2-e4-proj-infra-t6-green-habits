import mongoose, { Document } from 'mongoose';

export enum Category {
    AMBIENTAL = "Meio ambiente",
    HEALTH = "Saúde",
    SOCIAL = "Social",
    FINANCE = "Financeiro",
    NO_CATEGORY = "Sem categoria"
}

export interface Habit extends Document {
  id: string;
  title: string;
  description: string;
  category: Category;
  createdAt: Date;
  targetStreak?: number;
  daysChecked?: Date[];
}

export const HabitSchema = new mongoose.Schema<Habit>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, required: true },
  targetStreak: { type: Number },
  daysChecked: [{ type: Date }],
});

export const HabitModel = mongoose.model<Habit>('Habit', HabitSchema);
