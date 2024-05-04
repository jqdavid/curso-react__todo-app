import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
const NAME_TODO_KEY = 'TODOS_V1';
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage(NAME_TODO_KEY, [])
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))


  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.unshift({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text.toLowerCase() === text.toLowerCase())
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text.toLowerCase() === text.toLowerCase())
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      completeTodo,
      deleteTodo,
      searchedTodos,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}


export { TodoContext, TodoProvider }