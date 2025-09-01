/* eslint-disable no-console */
/* ------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');
const Todo = require('./models/todo');

const createTodo = async () => {
  const todoData = {
    text: 'Learn JS',
    isComplete: false,
  };

  const todo = await Todo.create(todoData);
  console.log('New todo:', todo);
};

const findTodo = async () => {
  const allTodos = await Todo.find();
  console.log('All Todos', allTodos);
};

const findSpecificTodo = async () => {
  const allTodos = await Todo.find({
    text: 'Learn JSaaaaaa',
  });
  console.log('All Todos', allTodos);
};

const runQueries = async () => {
  console.log('Queries running.');
  // The functions calls to run queries in our db will go here as we write them.
  await createTodo();
  console.log('========================================');
  await findTodo();
  console.log('============================================');
  await findSpecificTodo();
};

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries();

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

connect();
/* ------------------------------ Query Functions -----------------------------*/
