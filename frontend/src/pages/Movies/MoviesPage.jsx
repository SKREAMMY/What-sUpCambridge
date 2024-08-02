import React from "react";
import "./MoviesPage.css";



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
            <a href="#" className="dropdown-item" >
              Vue
            </a>
            <a href="#" className="dropdown-item">
              Lights
            </a>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default MoviesPage;
