import InternshipProgram from "../components/InternshipProgram";
import CandidatesComponent from "../components/CandidatesComponent";

import "./styles/home.scss";

export default function Home() {
  return (
    <div className="main-page-home-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <InternshipProgram />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <CandidatesComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
