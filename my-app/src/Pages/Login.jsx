import { useEffect, useState } from "react";
import "../css/Login.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerPost } from "../REDUX/slices/registerslices";
import { logPosts } from "../REDUX/slices/loginslices";

export default function Login() {
  const [input, setInput] = useState({
    //store all data
    Username: "", //default set as
    Password: "",
  });
  const navigate =useNavigate()

  const inputChange = (event) => {
    // data entered->input
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const [formError, setFormError] = useState({});
  console.log(formError); //error message viewing

  const validate = (values) => {
    var error = {};

    if (!values.Username) {
      error.Username = "Enter Username";
    }
    if (!values.Password) {
      error.Password = "Enter Password";
    }

    return error;
  };
  const navigates = useNavigate(); //page redirection

  //Redux
  const {login} = useSelector((state)=>state.loguser)
  const dispatchlog =useDispatch()
  console.log(login);


  useEffect(()=>{
    const role = localStorage.getItem("Role");
    if(role==="2"){
      navigates('/')
    }
    else if(role==="3"){
      navigates('/trainerhome')
    }
    else{
      navigates('/Login')
    }
  },[login])

  const submit = (e) => {
    e.preventDefault(); // avoid page reload
    setFormError(validate(input));
    if (Object.keys(formError).length == 0) {
      //errors undo ille check aakan,ethra length undennum

      // to connect react and node
      // axios
      //   .post("http://localhost:5000/log", input)
      //   .then((response) => {
      //     // console.log(response.data.details);
      //     console.log(response);

      //     if (response.data.role == 2) {
      //         localStorage.setItem("loginID", response.data.login_Id);
      //         localStorage.setItem("userID", response.data.user_Id);
      //         localStorage.setItem("name", response.data.user_Name);

      //       localStorage.setItem("Role", response.data.role);
      //       navigate("/");
      //     } else if (response.data.role == 3) {
      //       localStorage.setItem("loginID", response.data.login_Id);
      //       localStorage.setItem("Role", response.data.user_Role);
      //       localStorage.setItem("trainerID", response.data.trainerID);
      //       localStorage.setItem("trainerName",response.data.trainerName);

      //       localStorage.setItem("Role", response.data.role);
      //       navigate("/trainerhome");
      //     } else {
      //       navigate("/Login");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error(error.response.data.message, {
      //       position: "top-center",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     });
      //   });
      
      dispatchlog(logPosts(input))

    }
  };

  console.log(input);

  //Registration

  const [registerinput, setRegisterinput] = useState({
    Username: "",
    Name: "",
    Password: "",
    Email: "",
    Phone: "",
    Gender: "",
    Address: "",
  });
  const registerinputChange = (event) => {
    const { name, value } = event.target;
    setRegisterinput({ ...registerinput, [name]: value });
  };
  //REDUX
  const dispatch =useDispatch()
  const {registration,loading} = useSelector((state)=>state.register)
  console.log(registration);
   
      


  const [registerformError, setRegisterformError] = useState({});
  console.log(registerformError);
  const regvalidates = (regvalues) => {
    var regerrors = {};

    if (!regvalues.Username) {
      regerrors.Username = "Enter Username";
    }
    if (!regvalues.Password) {
      regerrors.Password = "Enter Password";
    }
    if (!regvalues.Email) {
      regerrors.Email = "Enter Email";
    }
    if (!regvalues.Phone) {
      regerrors.Phone = "Enter Phone";
    }
    if (!regvalues.Name) {
      regerrors.Name = "Enter Name";
    }

    if (!regvalues.Address) {
      regerrors.Address = "Enter Address";
    }
    if (!regvalues.Gender) {
      regerrors.Gender = "Enter Gender";
    }

    return regerrors;
  };

 
  const registersubmit = (e) => {
    e.preventDefault();
    setRegisterformError(regvalidates(registerinput));
    if (Object.keys(registerformError).length == 0) {
      // console.log(" Registration completed ");

      // to connect react and node
      dispatch((registerPost(registerinput)))
    
      // axios
      //   .post("http://localhost:5000/", registerinput)
      //   .then((response) => {
      //     console.log(response.data.message);

      //     toast.success(response.data.message, {
      //       position: "top-center",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     toast.error(error.response.data.message, {
      //       position: "top-center",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     });
      //   });
    }
  };

  console.log(registerinput);


  return (
    <div id="bodyy">
      <div class="container" id="container">
        <input type="checkbox" id="flip"></input>
        <div class="cover">
          <div class="front">
            <img src="../Images/log.jpg" width={"500px"} alt=""></img>
            <div class="text">
              <span class="text-1">
                The body achieves <br /> what the mind believes.
              </span>
              <span class="text-2">Let's get connected</span>
            </div>
          </div>
          <div class="back">
            {/* <img class="backImg" src="../IMAGES/heart.jpg" alt="">   */}
            <div class="text">
              <span class="text-1">
                <br />{" "}
              </span>
              <span class="text-2"></span>
            </div>
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      type="text"
                      name="Username"
                      onClick={() => {
                        setFormError({ ...formError, Username: "" });
                      }}
                      onChange={inputChange}
                      placeholder="Enter your name"
                      required
                    ></input>
                    <span style={{ color: formError.Username ? "red" : "" }}>
                      {formError.Username}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="Password"
                      name="Password"
                      onClick={() => {
                        setFormError({ ...formError, Password: "" });
                      }}
                      onChange={inputChange}
                      placeholder="Enter your Password"
                      required
                    ></input>
                    <span style={{ color: formError.Password ? "red" : "" }}>
                      {formError.Password}
                    </span>
                  </div>
                  <div class="text">
                    <a href="#">Forgot Password?</a>
                  </div>
                  <div class="button input-box">
                    <input
                      onClick={submit}
                      type="submit"
                      value="Submit"
                    ></input>
                  </div>
                  <div class="text sign-up-text">
                    Don't have an account?{" "}
                    <label for="flip">Register now</label>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
            <div class="signup-form">
              <div class="title">Registration</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      type="Username"
                      name="Username"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Username: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="User Name"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Username ? "red" : "" }}
                    >
                      {registerformError.Username}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="Password"
                      name="Password"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Password: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="Password"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Password ? "red" : "" }}
                    >
                      {registerformError.Password}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      type="Name"
                      name="Name"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Name: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder=" Name"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Name ? "red" : "" }}
                    >
                      {registerformError.Name}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="Name"
                      name="Email"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Email: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="Email"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Email ? "red" : "" }}
                    >
                      {registerformError.Email}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-phone"></i>
                    <input
                      type="Phone"
                      name="Phone"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Phone: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="Phone"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Phone ? "red" : "" }}
                    >
                      {registerformError.Phone}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-address-book"></i>
                    <input
                      type="Address"
                      name="Address"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Address: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="Address"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Address ? "red" : "" }}
                    >
                      {registerformError.Address}
                    </span>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      type="Gender"
                      name="Gender"
                      onClick={() => {
                        setRegisterformError({
                          ...registerformError,
                          Gender: "",
                        });
                      }}
                      onChange={registerinputChange}
                      placeholder="Gender"
                      required
                    ></input>
                    <span
                      style={{ color: registerformError.Gender ? "red" : "" }}
                    >
                      {registerformError.Gender}
                    </span>
                  </div>
                  <div class="button input-box">
                    <input
                      type="submit"
                      value="submit"
                      onClick={registersubmit}
                    ></input>
                  </div>
                  <div class="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
