import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />

      <Sidebar className="app__sidebar" />
      {/* <Content /> */}
    </div>
  );
}

export default App;
