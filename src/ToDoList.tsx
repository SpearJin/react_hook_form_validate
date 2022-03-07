import React, { useState } from 'react';

function ToDoList() {
  const [toDo, setToDo] = useState('');
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} type='text' placeholder='Wirte a to do' onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
