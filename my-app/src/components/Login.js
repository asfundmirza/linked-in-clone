import React, { useState } from "react";
import "./Login.css";
import linkedIn from "../images/Linkedin-Logo.png";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user);

      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        })
      );
      // auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      //   dispatch(
      //     login({
      //       email: userAuth.user.email,
      //       uid: userAuth.user.uid,
      //       name: userAuth.user.displayName,
      //     })
      //   );
      // });
    } catch (error) {
      console.log(error.message);
    }
  };
  const registerHandler = async (e) => {
    if (!name) {
      return alert("please enter your full name");
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        }).then(() =>
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              name: user.displayName,
            })
          )
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="linkedIn-img">
        <img src={linkedIn} alt="linkedIn-logo" />
      </div>
      <div className="SignIn__component">
        <h2 className="SignIn__text">Sign In</h2>
        <form className="form-container">
          <div className="input-container">
            <h4 className="Name">Full Name</h4>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="required in register"
            />
          </div>
          <div className="input-container">
            <h4 className="Email">Email</h4>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h4 className="Password">Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="SignIn__button"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
        <div className="register__container">
          <p>Not a member?</p>
          <span onClick={registerHandler}>Register Now</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
