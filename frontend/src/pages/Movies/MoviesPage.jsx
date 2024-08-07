import React, { useEffect, useState } from "react";
import "./MoviesPage.css";
import SimpleDateTime from "react-simple-timestamp-to-date";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  let navigate = useNavigate();
  const [vueData, setVueData] = useState([]);
  const day = "";
  const [datelists, setDateLists] = useState([]);
  const [modalData, setModalData] = useState({});
  const [dateforModal, setDateforModal] = useState("");

  const renderdataonModal = (e) => {
    console.log("rendering ", e);
    setModalData(e);
    let alldates = [];
    Object.keys(e.sessions).map((key) => {
      console.log("key is ", key);
      alldates.push(key);
    });
    setDateLists(alldates);
  };

  const setDatefortheModal = (e) => {
    console.log("date for modal ", e.date);
    console.log(typeof e.date);

    setDateforModal(e.date);
  };

  const redirectoBooking = (data) => {
    let fullurl = "https://" + data;
    console.log(fullurl);
    let res = fullurl.replace("vue", "myvue");
    window.open(res);
  };

  useEffect(() => {
    const getVueData = async () => {
      console.log("useffect running on every reload ");

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

    console.log("movie json");
  }, []);

  return (
    <>
      <div className="movietype d-flex flex-row">
        <div>Choose the Cinema Hall &nbsp;</div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
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
            <div
              className="vuedatacard col-lg-2 col-md-3 col-sm-6"
              key={data["_id"]}
            >
              <div className="movie-card">
                <img
                  className="card-img-top movie-image"
                  src={data["posterImageSrc"]}
                  alt="Card image cap"
                  data-bs-toggle="modal"
                  data-bs-target=".bd-example-modal-lg"
                  onClick={() => renderdataonModal(data)}
                />

                <div
                  className="modal fade bd-example-modal-lg"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{modalData.filmTitle}</h5>
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
                              src={modalData.posterImageSrc}
                              alt=""
                              className="movie-image-modal"
                            />
                          </div>
                          <div className="col-8">
                            {modalData.filmTitle}
                            <hr />
                            {modalData.synopsisShort}
                            <hr />
                            Duration: {modalData.duration} minutes
                            <hr />
                            Director: {modalData.director}
                            <hr />
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {dateforModal && <span>{dateforModal}</span>}
                                {!dateforModal && <span>choose date</span>}
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                {datelists.map((date) => (
                                  <a
                                    href="#"
                                    className="dropdown-item"
                                    key={date}
                                    onClick={() => setDatefortheModal({ date })}
                                  >
                                    {date}
                                  </a>
                                ))}
                              </div>
                              <hr />
                              <div className="row">
                                {modalData.sessions?.[dateforModal]?.map(
                                  (alldata) => (
                                    <>
                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                        <b>{alldata.screenName}</b> -
                                        {alldata.startTime} - {alldata.endTime}{" "}
                                        &nbsp;
                                        <b>Price: </b>
                                        {alldata.price}
                                        &nbsp;
                                        <a
                                          onClick={() =>
                                            redirectoBooking(alldata.bookingUrl)
                                          }
                                          className="btn btn-primary"
                                        >
                                          Book now
                                        </a>
                                      </div>
                                    </>
                                  )
                                )}
                              </div>
                            </div>
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
