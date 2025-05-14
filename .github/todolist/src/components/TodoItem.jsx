import React from "react";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../lib/config.js";
import {getDdayText} from "../utils/dateFormatter";

function TodoItem({ todo }) {
  const handleDelete = async () => {
    const confirm = window.confirm("정말 삭제할까요?");
    if (!confirm) return;

    await deleteDoc(doc(db, "todos", todo.id));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "0.5rem" }}>
      <Link to={`/todo/${todo.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>{getDdayText(todo.deadline)}</p>
      </Link>

    <button className= "delete-button" onClick={handleDelete} style={{ marginTop: "0.5rem" }}>
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
