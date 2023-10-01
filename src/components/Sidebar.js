import { NavLink } from "react-router-dom";
import "./styles/sidebar.scss";

export default function Sidebar() {
  return (
    <div className="main-sidebar-container text-center">
      <div className="img-user"></div>
      <div className="main-link-pages">
        <h6 className="link-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "link-item"
            }
          >
            <i className="fa-solid fa-house"></i>
          </NavLink>
        </h6>
        <h6 className="link-item">
          <i className="fa-solid fa-users"></i>
        </h6>
        <h6 className="link-item">
          <i className="fa-solid fa-calendar"></i>
        </h6>
        <h6 className="link-item">
          <NavLink
            to="/appview"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "link-item"
            }
          >
            <i className="fa-solid fa-share-nodes"></i>
          </NavLink>
        </h6>
        <h6 className="link-item">
          <NavLink
            to="/Opportunity"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "link-item"
            }
          >
            <i className="fa-regular fa-file-lines"></i>
          </NavLink>
        </h6>
        <h6 className="link-item">
          <i className="fa-regular fa-heart"></i>
        </h6>
        <h6 className="link-item">
          <i className="fa-solid fa-chevron-left"></i>
        </h6>
      </div>
      <div className="footer-sidebar">
        <i className="fa-solid fa-gear"></i>
        <div className="as-item">AS</div>
      </div>
    </div>
  );
}
