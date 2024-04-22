const express = require('express') ;
const cors = require('cors') ;
const pool = require('./connect/db')

const app = express();
const port = 5000;

// MIDDLEWARE
// app.use(cors());
app.use(cors({
  origin: `http://localhost:${port}/`,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: []
}));
app.use(express.json());

// ROUTES
// CREATE a todo
app.post('/todos', async(req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING * ", [description]);

    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET all todos
app.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET a todo
app.get('/todos/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE a todo
app.put('/todos/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json(`Todo ${id} was updated`);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE a todo
app.delete('/todos/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json(`Todo ${id} was deleted`);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log(`listening on port ${port}`);
})