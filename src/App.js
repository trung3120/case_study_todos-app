import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input, FormHelperText } from "@material-ui/core";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import "./App.css"
import Todo from "./components/Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("initTime", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            initTime: doc.data().initTime
          }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
      todo: input,
      initTime: serverTimestamp()
    })
    setInput('')
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Todo List App - Gnurt</h1>
      </div>
      <hr></hr>
      <form className="form">
        <FormControl>
          <InputLabel>
            Write a Todo
          </InputLabel>
          <Input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FormHelperText>We'll make you productive</FormHelperText>
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, initTime) => (
          <Todo todo={todo} initTime={initTime} />
        ))}
      </ul>
    </div>
  );
}

export default App;