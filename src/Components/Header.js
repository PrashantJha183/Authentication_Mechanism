import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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

  // function handleElementVisibility(id, action) {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     if (action === "show") {
  //       element.classList.remove("hidden");
  //     } else if (action === "hide") {
  //       element.classList.add("hidden");
  //     }
  //   }
  // }
  return (
    <>
      <header>
        <Link
          className={`${
            scrollPercent > 9000 && scrollPercent < 19000
              ? "logodark"
              : "logolight"
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
                  : "optionlight"
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
                  : "optionlight"
              }`}
              id="option2"
              to="/"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : "optionlight"
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
                  : "optionlight"
              }`}
              id="option4"
              to="/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : "optionlight"
              }`}
              id="option5"
              to="/signup"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${
                scrollPercent > 9000 && scrollPercent < 19000
                  ? "optiondark"
                  : "optionlight"
              }`}
              id="option6"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
