import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const host = process.env.REACT_APP_BACKEND_HOST;
function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const signUp = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.authToken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />

      <div className="container">
        <form>
          <div className="form-group" style={{ marginTop: "10%" }}>
            <label htmlFor="exampleInputEmail1" className="mx-1">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              name="name"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>

          <div className="form-group my-5">
            <label htmlFor="exampleInputEmail1" className="mx-1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group my-5">
            <label htmlFor="exampleInputPassword1" className="mx-1">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Create your Password"
              name="password"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>

          <div className="form-group my-5">
            <label htmlFor="exampleInputPassword1" className="mx-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Enter your Password"
              name="cpassword"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary my-2"
            style={{ display: "block", margin: "auto" }}
            onClick={signUp}
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
