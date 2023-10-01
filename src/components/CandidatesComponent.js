import { useState } from "react";
import ContentHomeBlock from "./block/ContentHomeBlock";

import "./styles/Candidatescomponent.scss";

export default function CandidatesComponent() {
  const listItem = [
    { id: 1, name: "Applied", num: "1745" },
    { id: 2, name: "Shortlisted", num: "453" },
    { id: 3, name: "Technical Interview", num: "123" },
    { id: 4, name: "Opportunity Browsing", num: "243" },
    { id: 5, name: "Video Interview |", num: "25" },
    { id: 6, name: "Video Interview ||", num: "25" },
    { id: 7, name: "Video Interview |||", num: "25" },
    { id: 8, name: "Offer", num: "25" },
    { id: 9, name: "Withdrawn", num: "25" },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="main-candidates-container">
      <div className="main-candidates-header">
        <div
          className="candidates-select-item"
          onClick={() => setToggle(!toggle)}
        >
          <p>
            Opportunity Browsing
            <span className="icon-select">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </p>
          {toggle && (
            <ul className="select-list-item">
              {listItem.map((item) => (
                <li className="list-item" key={item.id}>
                  <p>{item.name}</p>
                  <span>{item.num}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="candidates-icons">
          <span>
            <i className="fa-solid fa-user-xmark"></i>
          </span>
          <span>
            <i className="fa-solid fa-user-check"></i>
          </span>
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
        </div>
        <div className="candidates-interview">
          <p>Move To Video Interview 1</p>
          <span className="icon-interview">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <div className="main-candidates-content">
        <div className="main-content-header">
          <div className="check-all">
            <input type="checkbox" className="checkbox-item" />
            <span>247 Candidates</span>
          </div>
          <div className="head-items">
            <div className="head-item text-color">Qualifies</div>
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
        <div className="main-content-container">
          <ContentHomeBlock />
        </div>
      </div>
    </div>
  );
}
