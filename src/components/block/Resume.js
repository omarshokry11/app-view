import "./styles/Resume.scss";

export default function Resume() {
  return (
    <div className="main-resume-container">
      <h5 className="title-person">Resume</h5>
      <div className="icon-item">
        <span>
          <i className="fa-regular fa-eye"></i>
        </span>
        <span>
          <i className="fa-solid fa-file-arrow-down"></i>
        </span>
      </div>
      <div className="resum-content"></div>
    </div>
  );
}
