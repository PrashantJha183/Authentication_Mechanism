// import React, { useState, useEffect } from "react";

// export default function ImageSlider() {
//   const images = [
//     "Toaster.png",
//     "Toast.png",

//     // Add more image URLs as needed
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       // Increment the current index
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 10000); // Change image every 3 seconds (adjust as needed)

//     return () => {
//       // Cleanup: Clear the interval when the component unmounts
//       clearInterval(sliderInterval);
//     };
//   }, []);

//   return (
//     <>
//       <div className="image-slider">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`slide ${index === currentIndex ? "active" : ""}`}
//             // style={{ height: "10px", width: "10px" }}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";

function ImageSlider() {
  // const [ghumna, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollX);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const select = document.querySelector(".slider-image");

  // const dragging = (e) => {
  //   select.scrollLeft -= e.movementX;
  // };

  //   select.addEventListener("mousemove", dragging);

  // const [scrollPosition, setScrollPosition] = useState(0);

  // // Scroll the images to the left
  // const scrollLeft = () => {
  //   setScrollPosition(scrollPosition - 500);
  //   console.log(setScrollPosition); // Adjust the scroll distance as needed
  // };

  // // Scroll the images to the right
  // const scrollRight = () => {
  //   setScrollPosition(scrollPosition + 500); // Adjust the scroll distance as needed
  //   console.log(setScrollPosition);
  // };

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          <img src="Toaster.png" alt="Image 1" className="slider-image" />
          <br />
          <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br />
          <img src="Toast.png" alt="Image 2" className="slider-image" />
          <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <img src="Toaster.png" alt="Image 1" className="slider-image" />
          <br />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <br /> <img src="Toast.png" alt="Image 2" className="slider-image" />
          <img src="Toaster.png" alt="Image 1" className="slider-image" />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
