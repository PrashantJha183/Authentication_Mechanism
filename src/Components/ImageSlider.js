import React, { useState, useEffect } from "react";

function ImageSlider() {
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
