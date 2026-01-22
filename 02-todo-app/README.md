# 📝 Todo App (React + Vite)

A simple and clean **Todo App** built with **React and Vite** to practice core React concepts like state, lists, and events.

This is **Project 2** in the React Projects series.


## Project Structure

    02-todo-app/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   └── App.css
    └── README.md

## How This App Works

#### State 

We use useState to store todos:

      const [todos, setTodos] = useState([])

#### Add Todo

      serTodos([...todos, newTodo])

#### Delete Todo

      setTodos(todos.filter(todos => todo.id !== id ))

#### Toggle Complete

      setTodos(
      todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );

### Features

- Add todo
- Delete todo
- Mark as complete
- Clean UI
- Fast refresh (Vite)
- Beginner friendly code

### Concepts Used

- useState
- map() & filter()
- controlled inputs
- conditional rendering
- event handling
- immutable state updates

### Author

Ujjwal Kumar

Learning React by building real projects.

## Final Note

Build small. Build clean. Build daily
