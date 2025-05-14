import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../lib/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../styles/TodoAdd.css"; 

function AddTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    await addDoc(collection(db, "todos"), {
      title,
      description,
      deadline,
      createdAt: serverTimestamp(),
    });

    navigate("/");
  };

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <h2>할 일 추가</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">세부사항</label>
          <textarea
            id="description"
            className="input-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="deadline">마감일</label>
          <input
            id="deadline"
            className="input-field"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <div className="form-buttons">
            <button className="save-button" type="submit">저장</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
