import React, { useState, useEffect } from "react";
import "./localNews.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LocalNews = () => {
  const [localNews, setlocalNews] = useState([]);

  const search = useSelector((state) => state.search);
  const [filteredresult, setFilteredResult] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    async function getLocalNewsFunction() {
      console.log("inside local ");
      await fetch("http://localhost:5000/news/local")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log(json);
          setlocalNews(json.data);
          setCarousel(json.data.filter((data, index) => index < 5));
        });
    }
    getLocalNewsFunction();
  }, []);

  useEffect(() => {
    const ConvertToLoweCase = (data) => {
      return data?.toLowerCase();
    };

    const tempdata = localNews.filter((data) => {
      let keywords = ConvertToLoweCase(data.mediaKeywords);
      let title = ConvertToLoweCase(data.title);
      let description = ConvertToLoweCase(data.description);
      let searchableString = ConvertToLoweCase(search.state);
      searchableString = searchableString?.toLowerCase();

      // console.log(keywords, searchableString);

      let flag =
        keywords?.includes(searchableString) ||
        title?.includes(searchableString) ||
        description?.includes(searchableString);
      if (flag) {
        return data;
      }
    });
    setFilteredResult(tempdata);
    console.log(filteredresult);
  }, [search]);

  return (
    <div className="container-fluid LocalNews">
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-9">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-9">
              <>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide localnewscarousel"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    {carousel.map((news, index) => (
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                    ))}
                  </div>
                  <div class="carousel-inner">
                    {carousel.map((news, index) => (
                      <div class="carousel-item  active">
                        <Link to={news?.link}>
                          <img
                            src={news?.enclosure["@url"]}
                            class="d-block carousel-item-width"
                            alt="..."
                            href={news?.link}
                          />
                        </Link>

                        <div class="carousel-caption d-none d-md-block">
                          <h5>{news?.title}</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div>Ad here</div>
            </div>
          </div>

          <div className="row alignCards">
            {!search && (
              <>
                {/* {carousel.map((news) => (
                  <>
                  </>
                ))} */}

                {localNews.map((news) => (
                  <>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <div
                        className="card localNewsCard card-color"
                        style={{ backgroundColor: "#113f67" }}
                      >
                        <div className="card-horizontal row d-flex flex-row alignment">
                          <div className="col-sm-12 col-md-6 col-lg-6 img-square-wrapper">
                            <img
                              src={news.enclosure?.["@url"]}
                              className="localNewsImage"
                              alt=""
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card-body">
                              <h4 className="card-title">{news.title}</h4>
                              <p className="card-text">{news.description}</p>
                              <a href={news.link} className="btn btn-primary">
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}

            {search && (
              <>
                {filteredresult && (
                  <>
                    {filteredresult.map((news) => (
                      <>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                          <div className="card localNewsCard">
                            <div className="card-horizontal row d-flex flex-row alignment">
                              <div className="col-sm-12 col-md-6 col-lg-6 img-square-wrapper">
                                <img
                                  src={news.enclosure?.["@url"]}
                                  className="localNewsImage"
                                  alt=""
                                />
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card-body">
                                  <h4 className="card-title">{news.title}</h4>
                                  <p className="card-text">
                                    {news.description}
                                  </p>
                                  <a
                                    href={news.link}
                                    className="btn btn-primary"
                                  >
                                    Learn more
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                )}

                {filteredresult.length == 0 && (
                  <>
                    <p>No related data</p>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 sidebar">
          <h2>Read other</h2>
          <hr />
          {localNews.toReversed().map((news) => (
            <>
              <a href={news.link}>{news.title}</a>
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalNews;
