import React, { useState } from "react"

export default function toDoList() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSumbit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), Title: newItem, completed: false },
      ]
    }
    )
    setNewItem("")
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id === id) {
          return { ...todos, completed }
        }
        return todos
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todos => todos.id != id)
    }
    )
  }

  return (
    <>
      <div className="todosDiv">
        <form onSubmit={handleSumbit} className="New-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)}
              type="text" id="item" />
          </div>
          <button className="btn">Add</button>
        </form>
        <h1 className="Header">To Do list</h1>
        {todos.length === 0 && "Nothing to do"}
        <ul className="list">
          {todos.map(todos => {
            return (
              <li key={todos.id}>


                <label>

                  <input type="checkbox" checked={todos.completed}
                    onChange={e => toggleTodo(todos.id, e.target.checked)} />
                  {todos.Title}
                </label>
                <button onClick={() => deleteTodo(todos.id)} className="btn btn-danger">Delete</button>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )



}