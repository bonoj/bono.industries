import React, {useState, useContext} from 'react'
// import {Context} from "../store/appContext";
// import logo from "../img/logo.svg";
import "../style/App.css";


function App() {
  // const {store, actions} = useContext(Context)
  // const [todo, setTodo]=useState("")
  // const [todoList, setTodoList] =useState([])
  // console.log("store", store.todoList)
  return (
    <div className="App">
      {/* <input onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=> actions.addTodo(todo)}>Add</button>
      {store.todoList.map((e, index)=><TodoList todo={e} key={index}/>)} */}
      <h3>Engineering a better tomorrow today.</h3>
      <a href="https://bonoj.github.io/" target="_blank" rel="noopener noreferrer">Technically Android</a>
      <a href="https://www.youtube.com/watch?v=qGqfT9kkUQs" target="_blank" rel="noopener noreferrer">Anatomically Human</a>
    </div>
  );
}

export default App;
