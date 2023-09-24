import React, { useState, useEffect } from "react";
import BlogItem from "./FetchBlog";
const host = process.env.REACT_APP_BACKEND_HOST;

function BlogShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${host}/api/auth/getAllID`, {
          method: "POST",
        });
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        const dataArray = responseData.notes;
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <div className="text-center">
        <h1>My Blog</h1>
      </div> */}
      <div className="row">
        {data.map((item) => (
          <div className="col-md-auto" key={item._id}>
            {/* <div className="col"> */}
            <BlogItem
              title={item.title}
              description={item.description}
              tag={item.tag}
              date={item.date}
            />
            {/* </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogShow;
