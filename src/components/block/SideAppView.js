import SideAppUsers from "./SideAppUsers";
import "./styles/SideAppView.scss";

export default function SideAppView() {
  return (
    <div className="main-side-app-view-container">
      <div className="opportunity-item">
        <span className="sip-item">SIP</span>
        <span className="text-item">Opportunity Browsing</span>
        <span className="num-item">2325</span>
        <span className="icon-item">
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      <div className="search-item">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Serach by name, edu, exp or #tag" />
      </div>
      <div className="main-content-header">
        <div className="check-all">
          <input type="checkbox" className="checkbox-item" />
          <span className="text-color">
            Qualifies
            <span className="num-item">247</span>
          </span>
        </div>
        <div className="head-items">
          <div className="head-item border-item">
            Task
            <span className="num-item">25</span>
          </div>
          <div className="head-item">
            Disqualified
            <span className="num-item">78</span>
          </div>
        </div>
      </div>
      <div className="main-side-app-users-container">
        <SideAppUsers />
      </div>
    </div>
  );
}
