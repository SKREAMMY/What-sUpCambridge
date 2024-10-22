import React, { useEffect, useState } from "react";
// const cronjob = require("node-cron");
import "./TopStories.css";
import { Link } from "react-router-dom";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    console.log("inside top stories");

    async function fetchGlobalTopStories() {
      await fetch("http://localhost:5000/news/global/topStories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log("inside top stories component mame");
          // console.log("Top Stories ", json);
          setTopStories(json.data);
          console.log("top stories is ", topStories);
        });
    }

    fetchGlobalTopStories();
  }, []);

  return (
    <div className="container-fluid LocalNews">
      <div className="row localNewsBody">
        <div className="row localNewsList">
          {topStories.slice(15, topStories.length).map((news, i) => (
            <div className="col-lg-4 col-md-12 col-sm-12 allLocalNews" key={i}>
              <div className="localNewsImageContainer">
                <div className="row localImageCard">
                  <div className="col-6">
                    <Link to={news?.link} target="_blank">
                      <img
                        src={news?.mediaThumbnail["url"]}
                        alt=""
                        className="localNewsImage"
                      />
                    </Link>
                  </div>
                  <div className="col-6">
                    <a
                      className="localNewsDescription"
                      href={news?.link}
                      target="_blank"
                    >
                      {news?.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   {topStories.map((news) => (
    //     <div>{news.title}</div>
    //   ))}
    // </div>
  );
};

export default TopStories;
