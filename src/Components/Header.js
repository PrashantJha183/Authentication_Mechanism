import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  window.onbeforeunload = function () {
    window.scrollTo(-100, -100);
  };
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function setScrollVar() {
      const htmlElement = document.documentElement;
      const percentOfScreenHeightScrolled =
        (htmlElement.scrollTop / htmlElement.clientHeight) * 100;
      setScrollPercent(Math.min(percentOfScreenHeightScrolled * 100));
    }

    function handleScroll() {
      setScrollVar();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    setScrollVar();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <header>
        <Link
          className={`${
            scrollPercent > 9000 && scrollPercent < 19000
              ? "logodark"
              : scrollPercent < 31000
              ? "logolight"
              : "logodark"
          }`}
          id="logo"
          to="/"
        >
          <img className="logoimg" src="logo.png" alt="logo" />
          Toasted Media
        </Link>
        <ul>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : scrollPercent < 31000
                  ? "optionlight"
                  : "optiondark"
              }`}
              id="option1"
              to="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : scrollPercent < 31000
                  ? "optionlight"
                  : "optiondark"
              }`}
              id="option2"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : scrollPercent < 31000
                  ? "optionlight"
                  : "optiondark"
              }`}
              id="option3"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : scrollPercent < 31000
                  ? "optionlight"
                  : "optiondark"
              }`}
              id="option4"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : scrollPercent < 31000
                  ? "optionlight"
                  : "optiondark"
              }`}
              id="option5"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            {!localStorage.getItem("token") ? (
              <Link
                className={`${
                  scrollPercent > 9000 && scrollPercent < 19000
                    ? "optiondark"
                    : scrollPercent < 31000
                    ? "optionlight"
                    : "optiondark"
                }`}
                id="option6"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </header>
    </>
  );
}
