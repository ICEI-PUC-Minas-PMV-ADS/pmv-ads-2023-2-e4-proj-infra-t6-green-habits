import { AppError } from '../error';
import { HabitModel } from '../models/habit';
import UserModel from '../models/user';
import { Request, Response, NextFunction } from 'express';
import { ErrorReason, ErrorStatusCodes } from '../types/error';

interface NewHabitRequest {
    title: string;
    description: string;
    category: string;
    targetStreak?: number;
}

interface UpdateHabitRequest {
    title?: string;
    description?: string;
    category?: string;
    targetStreak?: number;
}

const createHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;

        const { title, description, targetStreak } = request.body as NewHabitRequest;
        if (!title || !description) {
            throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST)
        }

        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        let createdAt = new Date();
        let category = request.body.category || "Sem categoria";
        const newHabit = new HabitModel({ title, description, category, targetStreak, createdAt })

        user.habits.push(newHabit);
        await user.save();

        return response.status(201).json(newHabit);
    } catch (error) {
        next(error)
    }
};

const deleteHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { habitId } = request.params;

        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const habitToBeRemoved = user.habits.find(habit => habit._id.toString() === habitId);

        if (!habitToBeRemoved) {
            throw new AppError(ErrorReason.NONEXISTENT_HABIT, ErrorStatusCodes.NOT_FOUND)
        }

        let updatedUserHabits = user.habits.filter(habit => habit !== habitToBeRemoved);

        user.habits = updatedUserHabits;

        await user.save();

        return response.status(200).json({});
    } catch (error) {
        next(error)
    }
};


const getHabits = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        return response.status(200).json(user.habits);
    } catch (error) {
        next(error)
    }
}

const getHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { habitId } = request.params;
        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const habit = user.habits.find(habit => habit._id.toString() === habitId);

        if (!habit) {
            throw new AppError(ErrorReason.NONEXISTENT_HABIT, ErrorStatusCodes.NOT_FOUND)
        }

        return response.status(200).json(habit);
    } catch (error) {
        next(error)
    }
}

const updateHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { habitId } = request.params;
        const user = await UserModel.findById(id);

        const { title, description, targetStreak, category } = request.body as UpdateHabitRequest;

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const habit = user.habits.find(habit => habit._id.toString() === habitId);

        if (!habit) {
            throw new AppError(ErrorReason.NONEXISTENT_HABIT, ErrorStatusCodes.NOT_FOUND)
        }

        if (title) habit.title = title;
        if (description) habit.description = description;
        if (category) habit.category = category;

        const updatedHabit = await HabitModel.findByIdAndUpdate(
            habit._id,
            { $set: habit },
            { new: true }
        );
    
        user.save()
        
        return response.status(200).json(updatedHabit);
    }
    catch (error) {
        next(error)
    }
}

export { createHabit, deleteHabit, getHabits, getHabit, updateHabit }