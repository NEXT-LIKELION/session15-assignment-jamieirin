import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/config.js";
import "../styles/TodoDetail.css"; // 스타일 파일 불러오기

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const docRef = doc(db, "todos", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTodo({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchTodo();
  }, [id]);

  const handleUpdate = async () => {
    const docRef = doc(db, "todos", id);
    await updateDoc(docRef, {
      title: todo.title,
      description: todo.description,
      deadline: todo.deadline,
    });
    alert("수정 완료!");
    navigate("/");
  };

  if (!todo) return <p>로딩 중...</p>;

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <h2>할 일 수정</h2>

        <label htmlFor="title">할 일 제목</label>
        <input
          id="title"
          className="input-field"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />

        <label htmlFor="description">내용</label>
        <textarea
          id="description"
          className="input-field"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />

        <label htmlFor="deadline">기한</label>
        <input
          id="deadline"
          className="input-field"
          type="date"
          value={todo.deadline}
          onChange={(e) => setTodo({ ...todo, deadline: e.target.value })}
        />

        <div className="form-buttons">
          <button className="save-button" onClick={handleUpdate}>저장</button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
