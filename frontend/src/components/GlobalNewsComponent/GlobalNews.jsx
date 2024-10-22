import React, { useEffect, useState } from "react";
import TopStories from "./TopStoriesComponent/TopStories";
import WorldComponent from "./WorldComponent/World";
import World from "./WorldComponent/World";
import { useSelector } from "react-redux";

const GlobalNews = () => {
  // const [globalNews, setGlobalNews] = useState([]);

  const search = useSelector((state) => state.search);
  const [filteredresult, setFilteredResult] = useState([]);

  // useEffect(() => {
  //   console.log("calling global");
  //   async function fetchGlobalNews() {
  //     await fetch("http://localhost:5000/news/global/topStories")
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //       })
  //       .then((json) => {
  //         // setGlobalNews(json.data);
  //         console.log("global news setup", globalNews);
  //       });
  //   }

  //   fetchGlobalNews();
  // }, []);
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-topstories"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Top Stories
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-world"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            World
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-uk"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            UK
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-business"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Business
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-health"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Health
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-science"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Science
          </button>
        </li> */}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-topstories"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <TopStories />
        </div>
        <div
          className="tab-pane fade"
          id="pills-world"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <World />
        </div>
        <div
          className="tab-pane fade"
          id="pills-uk"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          UK
        </div>
        <div
          className="tab-pane fade"
          id="pills-business"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          Business
        </div>
        <div
          className="tab-pane fade"
          id="pills-health"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          Health
        </div>
        <div
          className="tab-pane fade"
          id="pills-science"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          Science
        </div>
      </div>
    </div>
  );
};

export default GlobalNews;
