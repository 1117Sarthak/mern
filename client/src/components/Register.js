import React, {useState} from "react";
import './Register.css';

const Register = () => {
  
  const [user,setUser]=useState({
    name : "",email : "",work : "", passoword : "", cpassword : ""
  })

  // const{ name,email,work,passoword,cpassword }=user;
  let name,value;
  

  const handleInputs = (e)=>{
    console.log()
    name=e.target.name;
    value=e.target.value;

    setUser({ ...user,[name]:value })
   
  }
  return (
    <>
      <section class="signup">
        <div className="signup-form">
          <form className="registration-form">

          <h2 class="form-title">Sign up</h2>
            <div className="form-group">
              <label htmlFor="name">
              <i class="zmdi zmdi-account register-icon"></i>
              </label>
              <input type="text" value={user.name} onChange={handleInputs} placeholder="Your Name" autocomplete="off" id="name" name="name" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="email">
              <i class="zmdi zmdi-email register-icon"></i>
              </label>
              <input type="email" value={user.email} onChange={handleInputs} placeholder="Enter Your Email" autocomplete="off" id="email" name="email" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
              <i class="zmdi zmdi-phone register-icon"></i>
              </label>
              <input type="number" value={user.phone} onChange={handleInputs} placeholder="Enter Your Phone number" autocomplete="off" id="phone" name="phone" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="work">
              <i class="zmdi zmdi-slideshow register-icon"></i>
              </label>
              <input type="text" value={user.work} onChange={handleInputs} placeholder="Enter Your Profession" autocomplete="off" id="work" name="work" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="password">
              <i class="zmdi zmdi-lock register-icon"></i>
              </label>
              <input type="password" value={user.name} onChange={handleInputs} placeholder="Enter Your Password" autocomplete="off" id="password" name="password" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="cpassword">
              <i class="zmdi zmdi-lock-outline register-icon"></i>
              </label>
              <input type="password" value={user.name} onChange={handleInputs} placeholder="Conform Your Password" autocomplete="off" id="cpassword" name="cpassword" className="input" />
            </div>

            <button className="btn">Register</button>

          </form>
          <div className="background-image">
            <img className="register-img" src={"https://image.freepik.com/free-vector/man-afro-using-laptop-computer-desk-working-online-illustration_24877-69115.jpg"} alt="" />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Register;
