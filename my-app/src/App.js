import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect( () => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           name: userAuth.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

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
