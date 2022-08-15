import React from "react";
import { Button } from "antd";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <Button id="b1" onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
