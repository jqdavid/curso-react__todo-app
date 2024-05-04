import { TodoContext } from '../../todo-context/TodoContext';
import './TodoSearch.css';
import React, { useContext, useState } from 'react';
function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  return (
    <input
      placeholder="Estudiar Astro"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
