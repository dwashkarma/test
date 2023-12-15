import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import PageComponent from "../Components/PageComponent";
import "bootstrap/dist/css/bootstrap.css";

import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
function General({ category, pageSize }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2dc1995b620b4027921449163ef1dc7d&category=${category}&pageSize=${pageSize}`;
    //fetching the api data
    fetch(url)
      //changing the api data into json format
      .then((response) => response.json())
      .then((response) => {
        //setting the data
        setData(response.articles);
        setLoading(false);
        console.log(response.articles);
      })
      //error handling
      .catch((err) => {
        console.log(err, "Not connected");
      });
  }, [category, pageSize]);
  return (
    <div>
      <NavBar />
      <div className=" container text-center my-3 fw-bold text-uppercase h3 ">
        Headlines of {category}
      </div>
      <div className="container d-flex justify-content-center ">
        <div className="   my-5">
          {loading && (
            <CircularProgress
              sx={{
                marginTop: 30,
                marginBottom: 30,
              }}
            />
            // <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </div>
        <div className="row my-4">
          {!loading &&
            data.map((items, index) => {
              return (
                <div
                  className="col-12 d-flex justify-content-center col-lg-4 col-md-6"
                  key={index}
                >
                  <PageComponent
                    url={items.url}
                    //if there is no image from the API it gets the another image as the else value;
                    image={
                      items.urlToImage
                        ? items.urlToImage
                        : "https://previews.123rf.com/images/upixel123/upixel1231405/upixel123140500012/28055994-computer-plate-204-no-content.jpg"
                    }
                    title={items.title.slice(0, 30) + "..."}
                    source={items.source.name}
                    description={items.description}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default General;
