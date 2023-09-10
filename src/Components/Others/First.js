import React from "react";
import { Link } from "react-router-dom";

export default function First() {
  return (
    <>
      <header>
        <Link className="logolight" id="logo" to="/">
          <img className="logoimg" src="img/logo.png" alt="logo" />
          Toasted Media
        </Link>
        <ul>
          <li>
            <Link className="optionlight" id="option1" to="/">
              Services
            </Link>
          </li>
          <li>
            <Link className="optionlight" id="option2" to="/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="optionlight" id="option3" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="optionlight" id="option4" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="optionlight" id="option5" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="optionlight" id="option6" to="/">
              Login
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
