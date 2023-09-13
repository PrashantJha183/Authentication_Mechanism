import React from "react";
import Header from "./Header";
import Footer from "./Others/Footer";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="port-main">
        <div className="sec-1">
          <ul>
            <li className="odd">Graphics Designing</li>
            <li className="even">Digital Marketing</li>
            <li className="odd">Wedding & Events</li>
            <li className="even">Content Creation</li>
          </ul>
        </div>
        <div className="sec-2">
          <div className="scrollable"></div>
        </div>
        <div className="sec-3">
          <ul>
            <li className="even">E-Commerse & Product</li>
            <li className="odd">Social Media Marketing</li>
            <li className="even">Real Estate & Interior</li>
            <li className="odd">Website Development</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
