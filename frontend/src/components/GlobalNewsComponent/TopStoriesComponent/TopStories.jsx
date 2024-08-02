import React, { useEffect, useState } from "react";
// const cronjob = require("node-cron");

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
    <div className="TopStories">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-10">
          <div className="row">
            {topStories.map((news) => (
              <>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="card">
                    <div className="card-horizontal row d-flex flex-row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="img-square-wrapper">
                          <img src={news.mediaThumbnail?.["url"]} alt="" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card-body">
                          <h4 className="card-title">{news.title}</h4>
                          <p className="card-text">{news.description}</p>
                          <a href="#" className="btn btn-primary">
                            BUTTON
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-100"></div>
                    <div className="card-footer w-100 text-muted">
                      Footer stating cats are CUTE little animals
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-2">
          <a href="#">Sample links for the next news</a>
          <hr />
          <a href="#">Sample links for the next news</a>
          <hr />
          <a href="#">Sample links for the next news</a>
          <hr />
          <a href="#">Sample links for the next news</a>
          <hr />
          <a href="#">Sample links for the next news</a>
          <hr />
          <a href="#">Sample links for the next news</a>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
