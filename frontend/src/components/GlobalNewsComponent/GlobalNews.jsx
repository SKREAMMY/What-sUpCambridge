import React, { useEffect, useState } from "react";

const GlobalNews = () => {
  const [globalNews, setGlobalNews] = useState([]);

  useEffect(() => {
    async function fetchGlobalNews() {
      await fetch("http://localhost:5000/news/global")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          setGlobalNews(json.data);
          console.log(globalNews);
        });
    }

    fetchGlobalNews();
  }, []);
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
        <li className="nav-item" role="presentation">
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
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-topstories"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="card">
                <div className="card-horizontal row d-flex flex-row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="img-square-wrapper">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Description</p>
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
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="card">
                <div className="card-horizontal row d-flex flex-row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="img-square-wrapper">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Description</p>
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
            {/* <div className="col-sm-12 col-md-3 col-lg-2">
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
            </div> */}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-world"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          World
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
