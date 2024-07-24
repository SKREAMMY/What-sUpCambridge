import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark text-white">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; Kiran K P, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-links">
          <li className="ms-3">
            <i className="fa fa-brands fa-linkedin"></i>
          </li>
          <li className="ms-3">
            <i className="fa fa-brands fa-facebook"></i>
          </li>
          <li className="ms-3">
            <i className="fa fa-brands fa-instagram"></i>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
