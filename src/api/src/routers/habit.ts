import express from 'express';
import { createHabit, deleteHabit, getHabits, getHabit, updateHabit } from '../controllers/habit';

const habitRoutes = () => {
    const userRouter = express.Router();

    userRouter.post('/', createHabit);
    userRouter.get('/', getHabits);
    userRouter.get('/:habitId', getHabit);
    userRouter.delete('/:habitId', deleteHabit);
    userRouter.patch('/:habitId', updateHabit);

    return userRouter;
}

export default habitRoutes;