import SideAppView from "../components/block/SideAppView";
import UserContentDetails from "../components/UserContentDetails";
import "./styles/ApplicationView.scss";

export default function ApplicationView() {
  return (
    <div className="main-app-view-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-5 col-12">
            <SideAppView />
          </div>
          <div className="col-lg-9 col-md-7 col-12">
            <UserContentDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
