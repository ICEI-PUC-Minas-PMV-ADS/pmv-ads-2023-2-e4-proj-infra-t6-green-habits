import express from 'express';
import { createGoal, deleteGoal, getGoals, updateGoal } from '../controllers/goal';

const goalRoutes = () => {
    const goalRouter = express.Router();

    goalRouter.post('/', createGoal);
    goalRouter.get('/', getGoals);
    goalRouter.delete('/:goalId', deleteGoal);
    goalRouter.patch('/:goalId', updateGoal);

    return goalRouter;
}

export default goalRoutes;