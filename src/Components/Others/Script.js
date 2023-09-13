
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import ImageSlider from "./ImageSlider";
import Footer from "./Others/Footer";
// import Notes from "./BlogShow";

function ToastedMedia() {
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
    //eslint-disable-next-line
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    setScrollVar();
    //eslint-disable-next-line
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function handleElementVisibility(id, action) {
    const element = document.getElementById(id);
    if (element) {
      if (action === "show") {
        element.classList.remove("hidden");
      } else if (action === "hide") {
        element.classList.add("hidden");
      }
    }
  }

  return (
    <>
      <Header />

      <img className={`toastmax ${scrollPercent > 5000 && scrollPercent < 14999 ? "page-2" : scrollPercent > 15000 && scrollPercent < 30999 ? "page-3" : scrollPercent > 31000 ? "page-4" : "page-1"
        }`} src="Toast.png" alt="no image" />
      <div className="Landing-1">
        <div className="text-content">
          <h1 className={`name ${scrollPercent > 3900 ? "nameout" : "namein"}`}>
            Toasted Media
          </h1>
          <h1
            className={`profiles ${scrollPercent > 3900 ? "nameout" : "namein"
              }`}
          >
            Creatives
          </h1>
          <h2
            className={`subtext ${scrollPercent > 3900 ? "nameout" : "namein"}`}
          >
            One stop destination for all your needs.
          </h2>
          <div className="wrapper">
            <div
              className={`link_wrapper ${scrollPercent > 2800 ? "nameout" : "namein"
                }`}
            >
              <Link to="/contact">Contact Us!</Link>
              <div className="icon">
                <svg viewBox="0 0 268.832 268.832">
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        {console.log(scrollPercent)}
        <div
          className={`main-text ${scrollPercent > 5000 ? "" : "hidden1"}`}
          id="main-text"
        >
          Our Services
        </div>

        <div className={`subtext-2 ${scrollPercent > 5000 ? "" : "hidden1"}`}>
          <ul>
            <li>
              <Link
                to="/"
                onMouseOver={() => handleElementVisibility("Photo", "show")}
                onMouseLeave={() => handleElementVisibility("Photo", "hide")}
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onMouseOver={() => handleElementVisibility("Video", "show")}
                onMouseLeave={() => handleElementVisibility("Video", "hide")}
              >
                Videography
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onMouseOver={() => handleElementVisibility("Mark", "show")}
                onMouseLeave={() => handleElementVisibility("Mark", "hide")}
              >
                Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onMouseOver={() => handleElementVisibility("Dev", "show")}
                onMouseLeave={() => handleElementVisibility("Dev", "hide")}
              >
                Development
              </Link>
            </li>
          </ul>
          <img
            className="mini hidden"
            id="Photo"
            src="Photography.png"
            alt=""
          />
          <img
            className="mini hidden"
            id="Video"
            src="Videography-.png"
            alt=""
          />
          <img
            className="mini hidden"
            id="Dev"
            src="Development.png"
            alt="no Image found"
          />
          <img
            className="mini hidden"
            id="Mark"
            src="Marketing.png"
            alt="no Image "
          />
        </div>
      </div>

      <div className="thir">
        <div className="slider-1">
          <ImageSlider />
        </div>
      </div>

      <div className="four">
        <div className={`hr1 ${scrollPercent > 25000 ? scrollPercent < 52000 ? "hr-in" : "opa-1" : "opa-1"}`} ></div>
      </div>



      <Footer />
    </>
  );
}

export default ToastedMedia;
