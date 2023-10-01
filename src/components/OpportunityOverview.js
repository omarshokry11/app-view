import "./styles/OpportunityOverview.scss";

export default function OpportunityOverview() {
  return (
    <div className="main-opportunity-overview-container">
      <div className="container-fkuid">
        <div className="row">
          <div className="col-md-7 col-12">
            <h4 className="title">Opportunity Overview</h4>
            <div className="details-items">
              <div className="detail-item">
                <h4>Applied</h4>
                <h5>3,122</h5>
                <h6>Previous Period</h6>
                <p>
                  1590
                  <span>
                    <i className="fa-solid fa-arrow-trend-up"></i> 15%
                  </span>
                </p>
              </div>
              <div className="detail-item">
                <h4>Offer</h4>
                <h5>183</h5>
                <h6>Previous Period</h6>
                <p>
                  71
                  <span>
                    <i className="fa-solid fa-arrow-trend-up"></i> 15%
                  </span>
                </p>
              </div>
              <div className="detail-item">
                <h4>Hired</h4>
                <h5>98</h5>
                <h6>Previous Period</h6>
                <p>
                  167
                  <span className="color-red">
                    <i className="fa-solid fa-arrow-trend-down"></i> 15%
                  </span>
                </p>
              </div>
            </div>
            <div className="chart-item">
              <img src="./img/chart.png" alt="Chart" />
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="title-header">
              <span>
                London Internship Program
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>
                <i className="fa-solid fa-calendar"></i> 01 Jan 2023 - 31 July
                2023
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className="total-flow">
              <h5>Total Candidate Flow</h5>
              <h4>4,567</h4>
              <div className="width-color">
                <p className="green">
                  <span>Qualified 78%</span>
                </p>
                <p className="red">
                  <span>Disqualified 22%</span>
                </p>
              </div>
              <div className="table-item">
                <div className="stage">
                  <h5>Stage</h5>
                  <p>Applied</p>
                  <p>Recommended</p>
                  <p>Interview</p>
                  <p>Offer</p>
                  <p>Hired</p>
                </div>
                <div className="qualified">
                  <h5 className="num-item">Qualified</h5>
                  <p className="num-item">3,122</p>
                  <p className="num-item">2,164</p>
                  <p className="num-item">443</p>
                  <p className="num-item">183</p>
                  <p className="num-item">118</p>
                </div>
                <div className="disqualified">
                  <h5 className="num-item">Disqualified</h5>
                  <p className="num-item">1,445</p>
                  <p className="num-item">958</p>
                  <p className="num-item">1721</p>
                  <p className="num-item">260</p>
                  <p className="num-item">65</p>
                </div>
              </div>
            </div>
            <div className="recommended-items">
              <div className="item">
                <h5>
                  Recommended <span>2,164</span>
                </h5>
                <h6>Previous Period</h6>
                <p>
                  90
                  <span>
                    <i className="fa-solid fa-arrow-trend-up"></i> 15%
                  </span>
                </p>
              </div>
              <div className="item">
                <h5>
                  Interview <span>443</span>
                </h5>
                <h6>Previous Period</h6>
                <p>
                  90
                  <span>
                    <i className="fa-solid fa-arrow-trend-up"></i> 15%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
