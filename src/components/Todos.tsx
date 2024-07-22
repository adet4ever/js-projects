import React,  { useState } from 'react'

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<any>([]);

  function handleSubmit(e: any) { 
    e.preventDefault();

    setTodos((currentTodos: any) => {
      let x = 3;
      console.log(todos);
      return [
         ...currentTodos,
         {id: currentTodos.length, title: newTodo, completed: false}
      ]
    });
    setNewTodo("");
    console.log(todos);
  }

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
    <>
      {/* <NewTodoForm  

      /> */}
      <div className="form-group">
        <h3>Add New Todo</h3>
        <label>New Item</label>
        <input type="text" id="item" className="form-control" value={newTodo} onChange={e => setNewTodo(e.target.value)}  />
        <button  className='btn btn-outline-primary' onClick={ handleSubmit }>Add Item</button>
      </div>

      <div>
        <h3>My ToDo List</h3>
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
    </>
  )
}

export default Todos;
