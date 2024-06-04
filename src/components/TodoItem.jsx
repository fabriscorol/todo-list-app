import React from 'react'

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <>
            <li 
                style={{ textDecoration: todo.completed ? 'line-through' : '' }} 
                className="border-b border-gray-200 flex items-center justify-between py-4">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2"  />
                    <span>{todo.text}</span>
                </label>               
                <div>
                    <button onClick={() => toggleComplete(todo._id, !todo.completed)} >
                        {todo.completed ? 'non achevée' : 'achevée'}
                    </button>
                    <button onClick={() => removeTodo(todo._id)} className="text-red-500 hover:text-red-700 mr-2 delete-btn">Supprimer</button>
                </div>
            </li>
        </>
    )
}

export default TodoItem