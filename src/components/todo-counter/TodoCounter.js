import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../todo-context/TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext)
  return (
    !(completedTodos === totalTodos) ?
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
      :
      <h1 className="TodoCounter">
        Has completado <span>todos los  TODOS</span>
      </h1>
  );
}

export { TodoCounter };
