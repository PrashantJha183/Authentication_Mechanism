import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = response.json();

    setCredentials({ email: "", password: "" });
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
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
        <form onSubmit={submit}>
          <div className="form-group" style={{ marginTop: "10%" }}>
            <label htmlFor="exampleInputEmail1" className="mx-1">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={credentials.email}
              name="email"
              onChange={onChange}
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
              placeholder="Password"
              value={credentials.password}
              name="password"
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-2"
            style={{ display: "block", margin: "auto" }}
            onChange={onChange}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
