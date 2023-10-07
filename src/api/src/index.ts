import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import habitRoutes from './routers/habit';
import { loginUser } from './controllers/auth';
import { MONGODB_URI } from './config/envs';
import { createUser } from './controllers/user';
import { authMiddleware } from './middlewares/auth';
import { errorMiddleware } from './middlewares/error';

const app = express();
app.use(bodyParser.json());

mongoose.connect(MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });

app.use(express.json());
app.post('/user', createUser);
app.post('/login', loginUser);
app.use(authMiddleware);
app.use('/habit', habitRoutes());
app.use(errorMiddleware);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});