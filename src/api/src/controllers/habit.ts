import { AppError } from '../error';
import { Category, HabitModel } from '../models/habit';
import UserModel from '../models/user';
import { Request, Response, NextFunction } from 'express';
import { ErrorReason, ErrorStatusCodes } from '../types/error';

interface NewHabitRequest {
    title: string;
    description: string;
    category: Category;
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
        let category = request.body.category || Category.NO_CATEGORY;
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

export { createHabit, deleteHabit, getHabits, getHabit }