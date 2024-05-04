import { TodoCounter } from '../components/todo-counter/TodoCounter';
import { TodoSearch } from '../components/todo-search/TodoSearch';
import { TodoList } from '../components/todo-list/TodoList';
import { TodoItem } from '../components/todo-item/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../components/todo-loading/TodoLoading';
import { TodosError } from '../components/todo-error/TodosError';
import { EmptyTodos } from '../components/empty-todo/EmptyTodos';
import { TodoContext } from '../todo-context/TodoContext';
import { useContext } from 'react';
import { Modal } from '../components/modal/Modal';
import { TodoForm } from '../components/todo-form/TodoForm';

function AppUI() {
  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
    searchValue
  } = useContext(TodoContext);

  return (
    <>
      <main>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(searchValue !== undefined &&  searchValue!=='' && searchedTodos.length === 0 ) ?  <EmptyTodos text={'Lo sentimos Todo no encontrado'}  /> : (!loading && searchedTodos.length === 0) ? <EmptyTodos   />: ''}
            {/* {(!loading && searchedTodos.length === 0) && <EmptyTodos  />} */}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
        {openModal && (
          <Modal>
           <TodoForm/>
          </Modal>
        )}
      </main>
    </>)
}

export { AppUI }