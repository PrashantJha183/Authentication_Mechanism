// // //
// // import React, { useState, useEffect } from "react";
// // import First from "./First";

// // function MyScrollComponent() {
// //   const [scrollPercent, setScrollPercent] = useState(0);

// //   useEffect(() => {
// //     function setScrollVar() {
// //       const htmlElement = document.documentElement;
// //       const percentOfScreenHeightScrolled =
// //         (htmlElement.scrollTop / htmlElement.clientHeight) * 100;
// //       setScrollPercent(Math.min(percentOfScreenHeightScrolled));

// //       // Add your logic to update classes and styles based on scrollPercent here
// //       // You can use state to manage class names and inline styles.
// //     }

// //     function handleScroll() {
// //       setScrollVar();
// //     }

// //     // Add scroll and resize event listeners
// //     window.addEventListener("scroll", handleScroll);
// //     window.addEventListener("resize", handleScroll);

// //     // Initialize scroll position
// //     setScrollVar();

// //     // Cleanup event listeners on component unmount
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //       window.removeEventListener("resize", handleScroll);
// //     };
// //   }, []); // Empty dependency array means this effect runs only once on mount

// //   // JSX structure for your component
// //   return (
// //     <div>
// //       {/* Add your HTML structure and elements here */}
// //       <div id="main-text" className="hidden">
// //         <First />
// //       </div>
// //       {/* Other elements */}
// //     </div>
// //   );
// // }

// // export default MyScrollComponent;

// import React, { useState, useEffect } from "react";
// // import First from "./First";

// function MyScrollComponent() {
//   const [scrollPercent, setScrollPercent] = useState(0);

//   useEffect(() => {
//     function setScrollVar() {
//       const htmlElement = document.documentElement;
//       const percentOfScreenHeightScrolled =
//         (htmlElement.scrollTop / htmlElement.clientHeight) * 100;
//       setScrollPercent(Math.min(percentOfScreenHeightScrolled));

//       // Add your logic to update classes and styles based on scrollPercent here
//       // You can use state to manage class names and inline styles.
//     }

//     function handleScroll() {
//       setScrollVar();
//     }

//     // Add scroll and resize event listeners
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleScroll);

//     // Initialize scroll position
//     setScrollVar();

//     // Cleanup event listeners on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []); // Empty dependency array means this effect runs only once on mount

//   // JSX structure for your component
//   return (
//     <>
//       <div>
//         {/* Add your HTML structure and elements here */}
//         <div id="main-text" className={scrollPercent > 50 ? "" : "hidden"}>
//           {/* <Header
//             name="Toasted Media"
//             option_1="SERVICES"
//             option_2="PORTFOLIO"
//             option_3="BLOG"
//             option_4="CONTACT"
//             option_5="ABOUT"
//             option_6="LOGIN"
//           /> */}
//           {/* <First /> */}
//           Toasted Media
//           <img scr="Toasted_Media.png" alt="noImage" />
//         </div>
//         <div
//           id="logo"
//           className={
//             scrollPercent > 95 && scrollPercent < 195 ? "logodark" : "logolight"
//           }
//         ></div>
//         <div
//           id="option1"
//           className={
//             scrollPercent > 95 && scrollPercent < 195
//               ? "optiondark"
//               : "optionlight"
//           }
//         >
//           Option 1
//         </div>
//         <div
//           id="option2"
//           className={
//             scrollPercent > 95 && scrollPercent < 195
//               ? "optiondark"
//               : "optionlight"
//           }
//         >
//           Option 2
//         </div>
//         {/* Add more elements and conditions as needed */}
//         <div id="new-toast" className={scrollPercent < 210 ? "out" : "in"}>
//           New Toast
//         </div>
//         {/* Add your other HTML elements here */}
//       </div>
//     </>
//   );
// }

// export default MyScrollComponent;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
// import Carousel from "react-multi-carousel";
import ImageSlider from "./ImageSlider";

function ToastedMedia() {
  const [scrollPercent, setScrollPercent] = useState(0);
  // const Image = () => {
  //   // <img src="Toaster.png" alt="nahi h" />;
  //   document.title = "You are amazing";
  // };

  // const image = ()=>{}
  // var count = 0;
  // setInterval(() => {
  //   document.title = "Boobies";
  // }, 10000);

  // setInterval(() => {
  //   count = count + 1;
  //   console.log(count);
  // }, 20000);
  // setInterval(() => {
  //   document.title = "Yes boss haa nahi";
  // }, 30000);

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
      {/* <header>
        <Link className="logolight" id="logo" to="/">
          <img className="logoimg" src="logo.png" alt="logo" />
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
            <Link className="optionlight" id="option3" to="/Blog">
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
      </header> */}

      <div className="Landing-1">
        <div className="text-content">
          <h1 className={`name ${scrollPercent > 3900 ? "nameout" : "namein"}`}>
            Toasted Media
          </h1>
          <h1
            className={`profiles ${
              scrollPercent > 3900 ? "nameout" : "namein"
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
              className={`link_wrapper ${
                scrollPercent > 2800 ? "nameout" : "namein"
              }`}
            >
              <Link to="/">Contact Us!</Link>
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
        {/* <img className="toastmax" src="Toast.png" alt="no image" /> */}
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
        {
          <img
            className={`toastnext ${scrollPercent < 15400 ? "out" : "in"}`}
            id="new-toast"
            src="Toast.png"
            alt="no image found"
          />
        }
      </div>

      <div className="four"></div>

      <div className="scroll my-5">
        <div className="slider">
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default ToastedMedia;
