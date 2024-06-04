import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Nouvelle tache"
                    className="w-full px-4 py-2 mr-2 rounded-lg
                             border-gray-300 focus:outline-none
                              focus:border-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded" type="submit">Ajouter</button>
            </div>
        </form>
    )
}

export default TodoForm