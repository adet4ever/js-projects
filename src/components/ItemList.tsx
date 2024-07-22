import React, { useState } from 'react'

const ItemList = () => {
  const [todos, setTodos] = useState<any>([]);

  function handleChecked(checked: boolean, id: number) {
    setTodos((currentTodos: any[]) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: checked};
        }
        return todo;
      });
    });
  }

  function handleDelete(id: number) {
    setTodos((currentTodos:any[]) => {
      return currentTodos.filter(x => x.id !== id);
    })
  }
  return (
    <div>
      <h3>My Item List</h3>
        <ul>
          {todos.map((item: any, idx: number) => 
            <li key={idx}> 
              <input type="checkbox" checked={item.completed} onChange={(e) => handleChecked(e.target.checked, item.id)}/> 
              {item.title} 
              <button className="btn btn-outline-danger" onClick={(e) => handleDelete(item.id)}   > delete </button>
            </li>
          )}
        </ul>
    </div>
  )
}

export default ItemList
