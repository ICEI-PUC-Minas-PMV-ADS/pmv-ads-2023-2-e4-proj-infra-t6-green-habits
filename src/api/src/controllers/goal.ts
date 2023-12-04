import { Request, Response, NextFunction } from 'express';
import { AppError } from '../error';
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import UserModel from '../models/user';
import { GoalModel } from '../models/goal';

interface NewGoalRequest {
    title: string;
}

interface updateGoalRequest {
    title?: string;
    completed?: boolean
}

export const createGoal = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { title } = request.body as NewGoalRequest;
        if (!title) {
            throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST)
        }

        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const newGoal = new GoalModel({ title, completed: false })

        user.goals.push(newGoal)
        await user.save()

        return response.status(201).json(newGoal)
    } catch (error) {
        next(error)
    }
}

export const updateGoal = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { goalId } = request.params;

        const { title, completed } = request.body as updateGoalRequest

        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const goal = user.goals.find(goal => goal._id.toString() === goalId);

        if (!goal) {
            throw new AppError(ErrorReason.NONEXISTENT_GOAL, ErrorStatusCodes.NOT_FOUND)
        }

        if (title) goal.title = title;
        goal.completed = completed ?? goal.completed;

        const updatedGoal = await GoalModel.findByIdAndUpdate(
            goal._id,
            { $set: goal },
            { new: true, upsert: true }
        )

        user.save()

        return response.status(200).json(updatedGoal)
    } catch (error) {
        next(error)
    }
}

export const deleteGoal = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const { goalId } = request.params;

        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        const goalToBeRemoved = user.goals.find(goal => goal._id.toString() === goalId);

        if (!goalToBeRemoved) {
            throw new AppError(ErrorReason.NONEXISTENT_HABIT, ErrorStatusCodes.NOT_FOUND)
        }

        const udpatedUserGoals = user.goals.filter(goal => goal._id !== goalToBeRemoved._id);

        user.goals = udpatedUserGoals;

        await user.save()

        return response.status(200).json({});
    } catch (error) {
        next(error)
    }
}

export const getGoals = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = response.locals.user;
        const user = await UserModel.findById(id);

        if (!user) {
            throw new AppError(ErrorReason.NONEXISTENT_USER, ErrorStatusCodes.NOT_FOUND)
        }

        return response.status(200).json(user.goals);
    } catch (error) {
        next(error)
    }
}