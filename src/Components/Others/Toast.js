import React, { useRef, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import {
  Animator,
  // MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  // ZoomIn,
  ZoomOut,
  batch,
  //   Fade,
  // FadeIn,
  //   FadeOut,
  //   Move,
  //   MoveIn,
  // MoveOut,
  //   Sticky,
  // StickyIn,
  //   StickyOut,
  //   Zoom,
  //   ZoomIn,
  //   ZoomOut,
} from "react-scroll-motion";

export default function Toast() {
  // const { ref: myRef, inView: myElementIsVisible, entry } = useInView();
  const myRef = useRef();
  useEffect(() => {
    console.log("myRef", myRef.current);
  }, []);
  return (
    <ScrollContainer>
      <ScrollPage ref={myRef}>
        <Animator
          animation={batch(
            Sticky(80, 50),
            ZoomOut(1, 10),
            MoveOut(-1200, 100)
            // ZoomIn(10, 1)
          )}
        >
          <img
            className="d-flex justify-content-end"
            src="Toast.png"
            alt="noImage"
            style={{
              height: "70vh",
              width: "auto",
              marginTop: "20%",
              marginLeft: "12%",
              zIndex: "2",
            }}
          />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

// const Bread = () => {
//   return (
//     <>
//       <ScrollPage>
//         <Animator
//           animation={
//             batch(
//               Sticky(-10, 60),
//               ZoomOut(1, 1)
//               //MoveIn(50, 50),
//               //ZoomIn(10, 1)
//             )
//             //   // ZoomInScrollOut
//           }
//         >
//           <img
//             className="d-flex justify-content-start"
//             src="Toast.png"
//             alt="noImage"
//             style={{
//               // marginTop: "-150%",
//               marginLeft: "50%",
//               height: "70vh",
//               width: "auto",
//               zIndex: "3",
//             }}
//           />
//         </Animator>
//       </ScrollPage>
//     </>
//   );
// };
