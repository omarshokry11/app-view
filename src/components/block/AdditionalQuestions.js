import { useState } from "react";
import "./styles/AdditionalQuestions.scss";

export default function AdditionalQuestions() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="main-additional-questions-container">
      <div className="additional-header">
        <h5 className="title-person">Additional Questions</h5>
        <p onClick={() => setToggle(!toggle)}>Sort</p>
        {toggle && (
          <ul className="dropdown-list">
            <li>
              <input type="checkbox" />
              <label>Paragraph</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Short Answer</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Yes/ No</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Dropdown Select</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Multiple Choice</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Date</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Number</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>File Upload</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>FiVideo</label>
            </li>
          </ul>
        )}
      </div>
      <div className="short-answer">
        <h6>
          <span>Short Answer</span>
        </h6>
        <div className="paragraph">
          <p className="recicle"></p>
          <p>
            What regions within Saudi Arabia are you available to pursue a
            traineeship opportunity? You may select multiple options that apply
          </p>
        </div>
        <span className="addition-item">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="short-answer">
        <h6>
          <span>Video Upload</span>
        </h6>
        <div className="paragraph">
          <p className="recicle"></p>
          <p>
            What regions within Saudi Arabia are you available to pursue a
            traineeship opportunity? You may select multiple options that apply
          </p>
        </div>
        <span className="addition-video">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="short-answer">
        <h6>
          <span>Number</span>
        </h6>
        <div className="paragraph">
          <p className="recicle"></p>
          <p>
            What regions within Saudi Arabia are you available to pursue a
            traineeship opportunity? You may select multiple options that apply
          </p>
        </div>
        <span className="addition-item">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </span>
      </div>
      <div className="short-answer">
        <h6>
          <span>Multiple Choice</span>
        </h6>
        <div className="paragraph">
          <p className="recicle"></p>
          <p>
            What regions within Saudi Arabia are you available to pursue a
            traineeship opportunity? You may select multiple options that apply
          </p>
        </div>
        <span className="addition-item">New York</span>
      </div>
      <div className="short-answer">
        <h6>
          <span>Dropdown</span>
        </h6>
        <div className="paragraph">
          <p className="recicle"></p>
          <p>
            What regions within Saudi Arabia are you available to pursue a
            traineeship opportunity? You may select multiple options that apply
          </p>
        </div>
        <span className="addition-item">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </span>
      </div>
    </div>
  );
}
