import React, { useContext, useState } from 'react';
import './TodoForm.css'
import { TodoContext } from '../../todo-context/TodoContext';
function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState('')
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext)
    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !=='' && newTodoValue !== undefined) {
            addTodo(newTodoValue)
            setOpenModal(false);
        }

    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange= (event) => {
        setNewTodoValue(event.target.value); 
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label >Escribe tu Nuevo TODO</label>
                <textarea   placeholder="Nuevo Todo"  value={newTodoValue}  onChange={onChange} />
                <div className='TodoForm-buttonContainer'>
                    <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}  type="button"> Cancelar</button>
                    <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
                </div>
            </form>
        </>
    );
}

export { TodoForm };