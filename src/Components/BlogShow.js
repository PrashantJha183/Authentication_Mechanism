// // import React, { useContext, useEffect, useState } from "react";
// // import NoteContext from "./Context/NoteContext";
// // import NotesItem from "./FetchBlog";
// // // import Blog from "./CreateBlog";
// // const host = "http://localhost:5000";

// // function Notes() {
// //   //   const context = useContext(NoteContext);
// //   //   const { nudes } = context;
// //   //   const notesInitial = [];
// //   const [data, setData] = useState([]);
// //   //   console.log(getNotes());

// //   useEffect(() => {
// //     //   const fetchBlogs = async () => {
// //     // await
// //     fetch(`${host}/api/auth/getAllID`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then((response) => response.json())
// //       .then((data) => setData(data))
// //       .catch((error) => console.error(error));
// //   }, []);

// //   // const data = await response.json();

// //   // setNotes(data);
// //   //   };
// //   console.log("hellof");
// //   //   useEffect(() => {
// //   //     console.log(fetchBlogs());
// //   //   }, []);
// //   //   const newNote = Object.keys(notes).map((key) => notes[key]);
// //   //   console.log(Object.keys(notes)[0]);
// //   //   console.log("newNote", newNote);
// //   //   var newNote = Object.entries(notes).map(([key, value]) => ({ key, value }));
// //   //   console.log("newNotes", newNote);

// //   return (
// //     <>
// //       <div className="row my-3">
// //         <h1 className="text-center">My Blogs</h1>
// //         <div className="container">
// //           {/* {notes.length === 0 && "No blogs to display"} */}

// //           {/* {notes.map((notes) => {
// //             return <NotesItem notes={notes} key={notes._id} />;
// //           })} */}
// //           {data.map((item) => {
// //             <div className="col-md-3" key={item.id}>
// //               <div className="card">
// //                 <div className="card-body">
// //                   <h2 className="card-title"> {item.title}</h2>
// //                   <p className="card-text">{item.description}</p>
// //                   <p className="card-text">{item.tag}</p>
// //                 </div>
// //               </div>
// //             </div>;
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Notes;

// import React, { useState, useEffect } from "react";
// const host = "http://localhost:5000";

// function Notes() {
//   const [data, setData] = useState([]); // State to store the fetched data

//   useEffect(() => {
//     // Fetch data from an API or another data source
//     // Replace this with your actual API endpoint or data source
//     fetch(`${host}/api/auth/getAllID`, {
//       method: "POST",
//     })
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // The empty dependency array ensures this effect runs once on component mount
//   console.log(data)
// //   return (
// //     <div>
// //       {data.map((item) => (
// //         <div key={item.id} className="card">
// //           <h2>{console.log(item.title)}</h2>
// //           <p>{item.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// }

// export default Notes;
