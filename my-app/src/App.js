import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      <div className="App">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__content">
            <Sidebar className="app__sidebar" />
            <Content />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
