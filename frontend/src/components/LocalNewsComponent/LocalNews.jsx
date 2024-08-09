import React, { useState, useEffect } from "react";
import "./localNews.css";
import { useSelector } from "react-redux";

const LocalNews = () => {
  const [localNews, setlocalNews] = useState([]);

  const search = useSelector((state) => state.search);
  const [filteredresult, setFilteredResult] = useState([]);

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

          // setInterval(() => {}, 2000);
          // // setlocalNews(localNews.shift());
          // console.log(localNews);
        });
    }
    getLocalNewsFunction();
  }, []);

  useEffect(() => {
    // setFilteredResult(
    //   // localNews.filter((data) => data.mediaKeywords === "kiran")

    // );

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
        <div className="col-sm-12 col-md-8 col-lg-10">
          {/* <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src="https://dummyimage.com/286x180/968080/fff.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://dummyimage.com/286x180/968080/fff.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src="https://dummyimage.com/286x180/968080/fff.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div> */}

          <div className="row alignCards">
            {!search && (
              <>
                {localNews.map((news) => (
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

export default LocalNews;
