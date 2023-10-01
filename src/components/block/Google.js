import "./styles/Google.scss";

export default function Google() {
  return (
    <div className="main-google-container">
      <h5 className="title-person">Google</h5>
      <div className="icons">
        <span className="icon-defualt">
          <i className="fa-solid fa-chart-pie"></i>
        </span>
        <span className="icon-defualt">
          <i className="fa-solid fa-file-arrow-down"></i>
        </span>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Applied</p>
              <h6>95</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Recommended</p>
              <h6>57</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Interview</p>
              <h6>39</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Offer</p>
              <h6>33</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Hired</p>
              <h6>15</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="google-item">
              <p>Total Rejected</p>
              <h6>60</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="google-table-content">
        <div className="table-header-item">
          <h3 className="flex-name">Opportunity Name</h3>
          <h3 className="flex-item">Status</h3>
          <h3 className="flex-item">Applied</h3>
          <h3 className="flex-item">Recommended</h3>
          <h3 className="flex-item">Interview</h3>
          <h3 className="flex-item">Offer</h3>
          <h3 className="flex-item">Hired</h3>
        </div>
        <div className="table-body-item border-bottom">
          <h3 className="flex-name">UX Internship Name</h3>
          <h3 className="flex-item">
            <p className="active">Active</p>
            <p className="disactive">Disqualified</p>
            <p className="num">Sub - Total</p>
          </h3>
          <h3 className="flex-item">
            <p>20</p>
            <p>7</p>
            <p className="num">27</p>
          </h3>
          <h3 className="flex-item">
            <p>17</p>
            <p>4</p>
            <p className="num">21</p>
          </h3>
          <h3 className="flex-item">
            <p>4</p>
            <p>1</p>
            <p className="num">5</p>
          </h3>
          <h3 className="flex-item">
            <p>3</p>
            <p>1</p>
            <p className="num">1</p>
          </h3>
          <h3 className="flex-item">
            <p>1</p>
            <p>1</p>
            <p className="num">2</p>
          </h3>
        </div>
        <div className="table-body-item">
          <h3 className="flex-name">Art Internship</h3>
          <h3 className="flex-item">
            <p className="active">Active</p>
            <p className="disactive">Disqualified</p>
            <p className="num">Sub - Total</p>
          </h3>
          <h3 className="flex-item">
            <p>44</p>
            <p>24</p>
            <p className="num">68</p>
          </h3>
          <h3 className="flex-item">
            <p>32</p>
            <p>4</p>
            <p className="num">36</p>
          </h3>
          <h3 className="flex-item">
            <p>21</p>
            <p>7</p>
            <p className="num">28</p>
          </h3>
          <h3 className="flex-item">
            <p>19</p>
            <p>8</p>
            <p className="num">27</p>
          </h3>
          <h3 className="flex-item">
            <p>10</p>
            <p>9</p>
            <p className="num">13</p>
          </h3>
        </div>
      </div>
    </div>
  );
}
