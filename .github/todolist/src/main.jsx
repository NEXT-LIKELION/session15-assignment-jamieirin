import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import TodoDetail from "./pages/TodoDetail.jsx";
import AddTodo from "./pages/AddTodo.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      <Route path="/add" element={<AddTodo />} />
    </Routes>
  </BrowserRouter>
);
