import { useState } from 'react'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './App.css'

function App() {

	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text, completed: false }];
		setTodos(newTodos);
	};

	const toggleComplete = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<h1>To-Do List</h1>
			<div className='class="md:w-1/2 mx-auto"'>
				<div className="bg-white shadow-md rounded-lg p-6">
					<TodoForm addTodo={addTodo} />

					<TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
				</div>
			</div>
		</>
	)
}

export default App
