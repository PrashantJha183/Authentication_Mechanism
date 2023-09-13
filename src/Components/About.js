import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Others/Footer";

export default function About() {
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />

      <div className="main-1">
        <div
          className={`image-container-1 ${
            scrollPercent > 5000 ? "info-out" : "info-in"
          }`}
        >
          <img src="logo.png" />
        </div>
        <hr
          className={`hr1 ${
            scrollPercent > 3000
              ? scrollPercent < 11000
                ? "hr-out"
                : "hr-out-2"
              : "hr-in"
          }`}
        />
        <div className="info-container-1">
          {console.log(scrollPercent)}
          <div
            className={`infoheading headerright ${
              scrollPercent > 5000 ? "info-out" : "info-in"
            }`}
          >
            Who are we?
          </div>
          <div
            className={`infosubtext subright ${
              scrollPercent > 5000 ? "info-out" : "info-in"
            }`}
          >
            Toasted Media is a one-stop destination for all your creative needs.
            Our team is dedicated to delivering first-class service and will
            walk you through the process of creating impactful insights which
            will help you pave the way and develop your creative briefs. Anyone
            can follow, whether you are an influencer or just setting out your
            brand or company. It's a platform to seek and inspire the
            best creative work.
          </div>
        </div>
      </div>
      <div className={`main-2`}>
        <div
          className={`hr2 ${
            scrollPercent > 7000
              ? scrollPercent < 12000
                ? "hr-in"
                : "opa-1"
              : "opa-1"
          }`}
        />
        <div className="info-container-1">
          {console.log(scrollPercent)}
          <div
            className={`infoheading headerleft ${
              scrollPercent < 10000 || scrollPercent > 12000
                ? "info-out"
                : "info-in"
            }`}
          >
            Ayush Parab
          </div>
          <div
            className={`infosubtext subleft ${
              scrollPercent < 10000 || scrollPercent > 12000
                ? "info-out"
                : "info-in"
            }`}
          >
            I am Ayush Parab, A Passionate videographer with a talent for
            capturing compelling stories and creating visually stunning content.
            Skilled in both shooting and editing, 1 bring a keen eye for detail
            and a creative approach to every project. With a deep understanding
            of various video production techniques and a commitment to
            delivering high-quality results, I thrive in fast-paced environments
            and excel at meeting client expectations. Ready to bring my
            expertise and passion to your next project.
          </div>
        </div>
        <div
          className={`image-container-2 ${
            scrollPercent < 10000 || scrollPercent > 12000
              ? "ayush-out"
              : "ayush-in"
          }`}
        >
          <img src="Ayush.png" />
        </div>
      </div>
      <div className={`main-3`}>
        <div
          className={`image-container-3 ${
            scrollPercent > 20000 && scrollPercent < 25000
              ? "yash-in"
              : "yash-out"
          }`}
        >
          <img src="Yash.png" />
        </div>
        <hr
          className={`hr1 ${
            scrollPercent > 16000 && scrollPercent < 25000
              ? "hr-in"
              : "hr-out-2"
          }`}
        />
        <div
          className={`infoheading headerright ${
            scrollPercent < 25000 && scrollPercent > 20000
              ? "info-in"
              : "info-out"
          }`}
        >
          Yash Kulkarni
        </div>
        <div
          className={`infosubtext-2 subright ${
            scrollPercent < 25000 && scrollPercent > 20000
              ? "info-in"
              : "info-out"
          }`}
        >
          I am Yash Kulkarni, An Enthusiastic developer who is developing my
          path towards success. I am skilled in logical development and problem
          solving making me the perfect choice for leading a team. By using my
          tactful Communication skills and practical Decision making, I make
          sure that my team works the best optimal way giving my clients the
          best output.
        </div>
      </div>
      <div className={`main-4`}>
        <div
          className={`hr2 ${
            scrollPercent > 25000
              ? scrollPercent < 52000
                ? "hr-in"
                : "opa-1"
              : "opa-1"
          }`}
        />
        <div className="info-container-1">
          {console.log(scrollPercent)}
          <div
            className={`infoheading headerleft ${
              scrollPercent < 52000 && scrollPercent > 32000
                ? "info-in"
                : "info-out"
            }`}
          >
            Avishkar Lot
          </div>
          <div
            className={`infosubtext subleft ${
              scrollPercent < 52000 && scrollPercent > 32000
                ? "info-in"
                : "info-out"
            }`}
          >
            I am Ayush Parab, A Passionate videographer with a talent for
            capturing compelling stories and creating visually stunning content.
            Skilled in both shooting and editing, 1 bring a keen eye for detail
            and a creative approach to every project. With a deep understanding
            of various video production techniques and a commitment to
            delivering high-quality results, I thrive in fast-paced environments
            and excel at meeting client expectations. Ready to bring my
            expertise and passion to your next project.
          </div>
        </div>
        <div
          className={`image-container-2 ${
            scrollPercent < 52000 && scrollPercent > 32000
              ? "ayush-in"
              : "ayush-out"
          }`}
        >
          <img src="Avishkar.png" />
        </div>
      </div>
      <Footer />
    </>
  );
}
