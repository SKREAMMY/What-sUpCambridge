import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HealthComponent = () => {
  const [health, setHealth] = useState([]);

  useEffect(() => {
    console.log("inside top stories");

    async function fetchGlobalHealth() {
      await fetch("http://localhost:5000/news/global/health")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log("inside top stories component mame");
          // console.log("Top Stories ", json);
          setHealth(json.data);
          console.log("top stories is ", health);
        });
    }

    fetchGlobalHealth();
  }, []);
  return (
    <div>
      <div className="container-fluid LocalNews">
        <div className="row localNewsBody">
          <div className="row localNewsList">
            {health.map((news, i) => (
              <div
                className="col-lg-4 col-md-12 col-sm-12 allLocalNews"
                key={i}
              >
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
    </div>
  );
};

export default HealthComponent;
