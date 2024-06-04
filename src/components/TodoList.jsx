import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					toggleComplete={() => toggleComplete(todo._id, !todo.completed)}
					removeTodo={() => removeTodo(todo._id)}
				/>
			))}
		</ul>
	)
}

export default TodoList