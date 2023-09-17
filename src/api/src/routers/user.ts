import express from 'express';
import { createUser } from '../controllers/user';
import { createUserHabit, deleteUserHabit, getUserHabits, getUserHabit } from '../controllers/habit';

const userHabitRoutes = () => {
    const userRouter = express.Router();

    userRouter.post('/', createUser);
    userRouter.post('/:userId/habits', createUserHabit);
    userRouter.get('/:userId/habits', getUserHabits);
    userRouter.get('/:userId/habits/:habitId', getUserHabit);
    userRouter.delete('/:userId/habits/:habitId', deleteUserHabit);

    return userRouter;
}

export default userHabitRoutes;