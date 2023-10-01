import "./styles/OtherPrograms.scss";

export default function OtherPrograms() {
  const otherPrograms = [
    {
      id: 1,
      class: "other-item",
      h6: "Misk Traineeship",
      online: "Active",
      classActive: "active",
    },
    {
      id: 2,
      class: "other-item border-top",
      h6: "Summer Internship",
      online: "Disqualified",
      classActive: "disqualified",
    },
    {
      id: 3,
      class: "other-item border-top",
      h6: "XYZ Traineeship",
      online: "Disqualified",
      classActive: "disqualified",
    },
    {
      id: 4,
      class: "other-item border-top",
      h6: "London Internship",
      p: "Currently At Video Task",
      online: "Active",
      classActive: "active",
    },
  ];

  return (
    <div className="main-other-program-container">
      <h5 className="title-person">Enrolled Other Programs</h5>
      {otherPrograms.map((other) => (
        <div className={other.class} key={other.id}>
          <span className="other-icon">
            <i className="fa-solid fa-diagram-project"></i>
          </span>
          <div className="other-details">
            <h6>{other.h6}</h6>
            <p>Currently At Video Task</p>
          </div>
          <div className={other.classActive}>{other.online}</div>
        </div>
      ))}
    </div>
  );
}
