import React, {useState} from 'react';
import {db} from "./lib/config.js";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import TodoList from './components/TodoList.jsx'
import "./styles/App.css";
import { Link } from "react-router-dom";


function App(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await addDoc(collection(db, 'todos'), {
            title: title,
            describtion: description,
            deadline: deadline,
            createdAt: serverTimestamp()
        });

        setTitle("");
        setDescription("");
        setDeadline("");
    };

    return (
    <div className="wrapper"> 
      <div className="app">
        <h1>TODO LIST</h1>
        <div className="todo-container">
          <TodoList />
        </div>
        <div className="add-button-container">
          <Link to="/add">
            <button className="add-button">추가</button>
          </Link>
        </div>
      </div>
    </div>
    );
}

export default App;