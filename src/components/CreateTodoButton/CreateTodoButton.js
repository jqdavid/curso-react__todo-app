import { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../todo-context/TodoContext';

function CreateTodoButton({setOpenModal}) {
  const {
    openModal
  } = useContext(TodoContext)

  return (
    <button onClick={()=> {  setOpenModal(state =>!state)}} className="CreateTodoButton">+</button>
  );
}

export { CreateTodoButton };
