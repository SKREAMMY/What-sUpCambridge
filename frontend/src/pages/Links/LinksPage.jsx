import React from "react";
import "./LinksPage.css";

const LinksPage = () => {
  return (
    <>
      {/* <div className="row linkpage">
        <div className="col-2 d-flex flex-column">
          <h2>All useful links</h2>
          <a href="">Cambridge city council Link</a>
          <a href="">Bin Collection dates</a>
          <a href="">Council Tax link</a>
          <a href="">Parking Spaces</a>
          <a href="">Other Info</a>
        </div>
        <div className="col-10">Sample content</div>
      </div> */}

      {/* <div className="row linkpage">
        <div className="col-lg-2 col-md-2 col-sm-4">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Bin Collection dates
            </a>
            <a
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Cambridge Council Links
            </a>
          </div>
        </div>

        <div className="col-lg-10 col-md-10 col-sm-8">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div>
                <h2>Bin Collection dates</h2>
                <a href="https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied">
                  Click here.
                </a>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              Profile
            </div>
          </div>
        </div>
      </div> */}

      <div className="row linkpage">
        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="container">
            <div className="card bin-card">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-trash fa-bounce icon"></i>
                {/* <h2>Bin Collection Dates</h2> */}
                <a
                  target="_blank"
                  href="https://www.cambridge.gov.uk/check-when-your-bin-will-be-emptied"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Bin Collection dates</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-file icon"></i>
                <a
                  target="_blank"
                  href="https://www.cambridge.gov.uk/manage-your-council-tax-account-and-check-your-bill"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Council Tax account and Bill</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-car icon"></i>
                <a
                  target="_blank"
                  href="https://www.cambridge.gov.uk/parking"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Parking</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-flag icon"></i>
                <a
                  target="_blank"
                  href="https://www.cambridge.gov.uk/report-it"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Report issues</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-money icon"></i>
                <a
                  target="_blank"
                  href="https://ip.e-paycapita.com/AIP/itemSelectionPage.do?link=showItemSelectionPage&siteId=85&languageCode=EN&source=AIP"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Pay</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="container">
            <div className="card bin-card ">
              <div className="card-body d-flex flex-column bin-body">
                <i className="fa fa-list icon"></i>
                <a
                  target="_blank"
                  href="https://applications.greatercambridgeplanning.org/online-applications/"
                  style={{ fontStyle: "italic" }}
                >
                  <h2>Check Planning Applications</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksPage;
