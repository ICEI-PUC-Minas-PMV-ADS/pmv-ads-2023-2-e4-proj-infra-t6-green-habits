import { Category, HabitModel } from '../models/habit';
import UserModel from '../models/user';
import { Request, Response, NextFunction } from 'express';

interface NewHabitRequest {
    title: string;
    description: string;
    category: Category;
    targetStreak?: number;
}

const createUserHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId } = request.params;
        const { title, description, targetStreak } = request.body as NewHabitRequest;
        if (!title || !description) {
            return response.status(400).json({ error: "Dados inválidos" });
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            return response.status(404).json({ error: 'Usuario nao encontrado' });
        }

        let createdAt = new Date();
        let category = request.body.category || Category.NO_CATEGORY;
        const newHabit = new HabitModel({ title, description, category, targetStreak, createdAt })

        user.habits.push(newHabit);
        await user.save();

        return response.status(201).json(newHabit);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Erro interno' });
    }
};

const deleteUserHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId, habitId } = request.params;

        const user = await UserModel.findById(userId);

        if (!user) {
            return response.status(404).json({ error: 'Usuario nao encontrado' });
        }

        const habitToBeRemoved = user.habits.find(habit => habit._id.toString() === habitId);

        if (!habitToBeRemoved) {
            return response.status(404).json({ error: 'Habito nao encontrado' });
        }

        let updatedUserHabits = user.habits.filter(habit => habit !== habitToBeRemoved);

        user.habits = updatedUserHabits;

        await user.save();

        return response.status(200).json({});
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Erro interno' });
    }
};


const getUserHabits = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId } = request.params;
        const user = await UserModel.findById(userId);

        if (!user) {
            return response.status(404).json({ error: 'Usuario nao encontrado' });
        }

        return response.status(200).json(user.habits);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Erro interno' });
    }
}

const getUserHabit = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId, habitId } = request.params;
        const user = await UserModel.findById(userId);

        if (!user) {
            return response.status(404).json({ error: 'Usuario nao encontrado' });
        }

        const habit = user.habits.find(habit => habit._id.toString() === habitId);

        if (!habit) {
            return response.status(404).json({ error: 'Habito nao encontrado' });
        }

        return response.status(200).json(habit);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Erro interno' });
    }
}

export { createUserHabit, deleteUserHabit, getUserHabits, getUserHabit }