import React, { useState, useEffect } from "react";
const host = process.env.REACT_APP_BACKEND_HOST;

function AllBlogs() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${host}/api/auth/getAllBlogs`, {
          method: "POST",
        });
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const responsejson = await response.json();
        console.log(responsejson);
        // const dataArray = Object.values(responsejson);
        const dataArray = responsejson.notes;
        console.log(dataArray);
        setDatas(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        {/* <div className="row mx-5 my-5"> */}
        {datas.map((item) => (
          <div
            className="col-md-5 my-5"
            key={item._id}
            style={{ display: "block", margin: "auto" }}
          >
            <div
              className="card text-center"
              style={{ borderColor: "#cfa97d" }}
            >
              <div
                className="card-body"
                style={{ backgroundColor: "#cfa97d", outline: "none" }}
              >
                <h2 className="card-title"> {item.title}</h2>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.tag}</p>
                <p className="card-text">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default AllBlogs;
