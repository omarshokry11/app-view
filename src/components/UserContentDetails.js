import PersonalInformationBlock from "./block/PersonalInformationBlock";
import Resume from "./block/Resume";
import AdditionalQuestions from "./block/AdditionalQuestions";
import OtherPrograms from "./block/OtherPrograms";
import "./styles/UserContentDetails.scss";

export default function UserContentDetails() {
  return (
    <div className="main-user-content-details-container">
      <div className="user-profile-header">
        <div className="profile-img">
          <span>user-img</span>
        </div>
        <div className="user-profile-details">
          <div className="user-profile">
            <h6 className="profile-name">Aaliyah Sanderson</h6>
            <span className="profile-item">New York</span>
            <span className="profile-item">Marketing</span>
            <span className="profile-item">London</span>
          </div>
          <div className="user-details">
            <span>Saudi Arabia</span>
            <span className="email-user">aaliyahs@gmail.com</span>
            <span>+00 000 000 0000</span>
          </div>
          <div className="user-profile-tag">
            <span>#top_candidate</span>
            <span>#marketing_june</span>
            <span>Add tag</span>
          </div>
        </div>
        <div className="score-profile">
          <p>
            Overall Score <span>7</span>
          </p>
          <span className="history-applied">Applied on 12 June 2023</span>
        </div>
      </div>
      <div className="main-profile-item">
        <p className="active">Profile</p>
        <p>Video</p>
        <p>Evaluation</p>
        <p>Placement</p>
        <p>Compliance</p>
        <p>Notes</p>
      </div>
      <div className="personal-information-content">
        <PersonalInformationBlock />
      </div>
      <div className="resume-content">
        <Resume />
      </div>
      <div className="additional-questions">
        <AdditionalQuestions />
      </div>
      <div className="other-programs">
        <OtherPrograms />
      </div>
    </div>
  );
}
