import Google from "./block/Google";
import Microsoft from "./block/Microsoft";
import "./styles/DetailedOpportunity.scss";

export default function DetailedOpportunity() {
  return (
    <div className="main-detailes-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h4>Detailed Opportunity Overview</h4>
          </div>
          <div className="col-lg-8 col-md-6 col-12">
            <div className="main-search-item">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Serach by name, edu, exp or #tag"
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <p className="sorted-item">
              Sort by
              <span>
                <i className="fa-solid fa-arrow-up-short-wide"></i>
              </span>
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <p className="csv-item">Export All As CSV</p>
          </div>
        </div>
      </div>
      <div className="main-google-content">
        <Google />
      </div>
      <div className="main-microsoft-content">
        <Microsoft />
      </div>
    </div>
  );
}
