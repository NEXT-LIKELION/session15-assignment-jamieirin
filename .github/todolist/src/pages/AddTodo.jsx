import React from "react";
import { useState } from "react";
import { db } from "../lib/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await addDoc(collection(db, "todos"), {
      title,
      description,
      deadline,
      createdAt: serverTimestamp(),
    });

    navigate("/");
  };

  return (
    <div className="add-page">
      <h2>할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="세부사항"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default AddTodo;
