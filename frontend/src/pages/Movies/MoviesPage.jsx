import React, { useEffect, useState } from "react";
import "./MoviesPage.css";
import SimpleDateTime from "react-simple-timestamp-to-date";

const MoviesPage = () => {
  const [vueData, setVueData] = useState([]);
  const day = "";
  const [datelists, setDateLists] = useState([]);

  const convertDatetoDay = (e) => {
    return new Date(e).toDateString();

    // return e.toDateString();
  };

  function regroupByDate(jsonArray) {
    return jsonArray.reduce((grouped, item) => {
      if (!grouped[item.dateofShow]) {
        grouped[item.dateofShow] = [];
      }
      grouped[item.dateofShow].push(item);
      // console.log("grouped ", grouped);

      return [grouped];
    }, {});
  }

  // const showModalData = (e) => {
  //   console.log(e.filmTitle);
  // };

  useEffect(() => {
    const getVueData = async () => {
      await fetch("http://localhost:5000/movies/vue")
        .then((response) => {
          if (response.ok) {
            console.log("reponse for movies is ", response.status);
            return response.json();
          }
        })
        .then((jsondata) => {
          setVueData(jsondata.data);
        });

      // vueData.forEach((v) => {
      //   v["sessions"].forEach((d) => {
      //     d["dateofShow"] = convertDatetoDay(d["dateofShow"]);
      //   });

      //   v["sessions"] = regroupByDate(v["sessions"]);
      // });

      // console.log("final ", vueData[0].sessions);
    };

    const getLightsData = async () => {
      await fetch("http://localhost:5000/movies/lights")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((jsondata) => {
          console.log("lights data ", jsondata);
        });
    };

    getVueData();
    // vueData.map((d) => {
    //   console.log("individual data is ");
    // });

    console.log("movie json");
  }, []);

  return (
    <>
      <div className="movietype d-flex flex-row">
        <div>Choose the Cinema Hall</div>
        <div className="dropdown">
          <button
            className="btn btn-outline dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Click here to choose...
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a href="#" className="dropdown-item">
              Vue
            </a>
            <a href="#" className="dropdown-item">
              Lights
            </a>
          </div>
        </div>
      </div>

      <div className="movies">
        <div className="row d-flex">
          {vueData.map((data) => (
            <div className="vuedatacard col-lg-2 col-md-3 col-sm-6">
              <div className="movie-card">
                <img
                  className="card-img-top movie-image"
                  src={data["posterImageSrc"]}
                  alt="Card image cap"
                  data-bs-toggle="modal"
                  data-bs-target=".bd-example-modal-lg"
                />

                <div
                  className="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{data.filmTitle}</h5>
                        <button
                          type="button"
                          className="close btn btn-secondary"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row modaldata">
                          <div className="col-4">
                            <img
                              src={data["posterImageSrc"]}
                              alt=""
                              className="movie-image-modal"
                            />
                          </div>
                          <div className="col-8">
                            {data.filmTitle}
                            <hr />
                            {data.synopsisShort}
                            <hr />
                            Duration: {data.duration} minutes
                            <hr />
                            Director: {data.director}
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex">
                  <h5 className="card-title">{data["filmTitle"]}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
