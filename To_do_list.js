// App State
const state = {
  todos: [],
  count: 0
};

// Add a todo
function addTodo(task) {
  if (!task) return;
  state.todos.push({ id: Date.now(), text: task, done: false });
}

// Toggle todo status
function toggleTodo(id) {
  const todo = state.todos.find(t => t.id === id);
  if (todo) todo.done = !todo.done;
}

// Delete a todo
function deleteTodo(id) {
  state.todos = state.todos.filter(t => t.id !== id);
}

// Show all todos
function listTodos() {
  state.todos.forEach(todo => {
    console.log(`[${todo.done ? "✔" : " "}] ${todo.text}`);
  });
}

// Counter
function increment() {
  state.count++;
  console.log("Count:", state.count);
}

// Demo
addTodo("Learn JavaScript");
addTodo("Build something cool");
listTodos();

toggleTodo(state.todos[0].id);
listTodos();

increment();

deleteTodo(state.todos[0].id);
listTodos();
