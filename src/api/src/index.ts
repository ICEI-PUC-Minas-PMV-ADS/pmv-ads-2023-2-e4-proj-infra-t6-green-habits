import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userHabitRoutes from './routers/user';
dotenv.config();

const app = express();
app.use(bodyParser.json());

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB Atlas connection error:', err);
  });

app.use(express.json());
app.use('/user', userHabitRoutes());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});