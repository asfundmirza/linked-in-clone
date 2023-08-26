import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* <div className="App">
      <Header />
      <div className="app__content"> 
       <Sidebar className="app__sidebar" />
        <Content />
        </div>
        </div> */}
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
