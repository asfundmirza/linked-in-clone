import React from "react";
import "./Login.css";
import linkedIn from "../images/Linkedin-Logo.png";
function Login() {
  const loginHandler = (e) => {
    e.preventDefault();
  };
  const registerHandler = (e) => {
    e.preventDefault();
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
            <input type="text" placeholder="required in register" />
          </div>
          <div className="input-container">
            <h4 className="Email">Email</h4>
            <input type="text" />
          </div>
          <div className="input-container">
            <h4 className="Password">Password</h4>
            <input type="password" />
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
