import React, { useRef, useState } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [text, setText] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    setText("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">MY TODO</label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
          onChange={(event) => handleOnChange(event)}
          value={text}
        />
      </div>
      <button id="b2" type="submit">
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
