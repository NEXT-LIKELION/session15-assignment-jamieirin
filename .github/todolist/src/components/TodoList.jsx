import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import {db} from '../lib/config.js';
import TodoItem from './TodoItem.jsx';

function TodoList(){
    const [todos, setTodos]= useState([]);

    useEffect(() => {
        const q= query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})));
        });
        return () => unsubscribe();
    }, []);

    if (todos.length === 0){
    return <p>새로운 할 일을 추가해주세요!</p>;
    }

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList;