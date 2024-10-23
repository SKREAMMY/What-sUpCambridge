import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BusinessComponent = () => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    console.log("inside top stories");

    async function fetchGlobalBusiness() {
      await fetch("http://localhost:5000/news/global/business")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log("inside top stories component mame");
          // console.log("Top Stories ", json);
          setBusiness(json.data);
          console.log("top stories is ", business);
        });
    }

    fetchGlobalBusiness();
  }, []);
  return (
    <div>
      <div className="container-fluid LocalNews">
        <div className="row localNewsBody">
          <div className="row localNewsList">
            {business.slice(15, business.length).map((news, i) => (
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

export default BusinessComponent;
