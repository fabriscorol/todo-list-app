import React, { useState, useEffect } from 'react'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import axios from 'axios'
import './App.css'

function App() {

	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		try {
			const response = await axios.get('http://localhost:3000/tasks');
			setTodos(response.data);
			setLoading(false);
		} catch (err) {
			setError("Impossible de récupérer les tâches");
			setLoading(false);
		}
	};

	const addTodo = async (text) => {
		try {
			const response = await axios.post('http://localhost:3000/tasks', { text });
		    setTodos([...todos, response.data]);

		} catch (error) {
			setError("Impossible d'ajouter la tâche");
		}
	};

	const toggleComplete = async (id, completed) => {
		try {
			const response = await axios.put(`http://localhost:3000/tasks/${id}`, { completed });
    		setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
			
		} catch (error) {
			setError("Impossible de mettre à jour la tâche");
		}
	};

	const removeTodo = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/tasks/${id}`);
			setTodos(todos.filter(todo => todo._id !== id));
		} catch (err) {
			setError('Impossible de supprimer la tâche');
		}
	};

	if (loading) {
		return <div>Chargement ...</div>;
	}
	
	return (
		<>
			<h1>To-Do List</h1>
			{ error ? (<span className='text-red-500'> {error} </span> ) : "" }

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
