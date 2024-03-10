import React from "react";
import "./Signin.css";

const Signin = () => {

  
  return (
    <div>
      <section class="signin">
        <div className="signin-form">
          <div className="background-image">
            <img
              src={
                "https://image.freepik.com/free-vector/man-afro-using-laptop-computer-desk-working-online-illustration_24877-69115.jpg"
              } className="signin-img"
              alt=""
            />
          </div>
          <form className="registration-form">
            <h2 class="form-title">Sign up</h2>

            <div className="form-group">
              <label htmlFor="email">
                <i class="zmdi zmdi-email signin-icon"></i>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                autocomplete="off"
                id="email"
                name="email"
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock signin-icon"></i>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                autocomplete="off"
                id="password"
                name="password"
                className="input"
              />
            </div>

            <button className="btn">Register</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signin;
