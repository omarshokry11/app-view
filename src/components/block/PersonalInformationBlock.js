import "./styles/PersonalInformationBlock.scss";

export default function PersonalInformationBlock() {
  const personalInformation = [
    {
      id: 1,
      icon: "fa-regular fa-circle-user",
      p: "Nationality",
      h6: "Sri Lankan",
    },
    {
      id: 2,
      icon: "fa-solid fa-circle-user",
      p: "National ID",
      h6: "0000000000",
    },
    { id: 3, icon: "fa-regular fa-user", p: "Gender", h6: "Female" },
    {
      id: 4,
      icon: "fa-regular fa-calendar",
      p: "Date of Birth",
      h6: "00-00-0000",
    },
  ];

  const educationItems = [
    {
      id: 1,
      class: "education-item style-display",
      icon: "fa-solid fa-school",
      h6: "Bachelor in Biochemistry",
      p: "King Saud University",
      history: [
        { id: 1, name: "Saudi Arabia", class: "country" },
        { id: 2, name: "Jan 2022 - " },
        { id: 3, name: "Jan 2023" },
      ],
    },
    {
      id: 2,
      class: "education-item-border education-item style-display",
      icon: "fa-solid fa-school",
      h6: "Bachelor in Biochemistry",
      p: "King Saud University",
      history: [
        { id: 1, name: "Saudi Arabia", class: "country" },
        { id: 2, name: "Jan 2022 - " },
        { id: 3, name: "Jan 2023" },
      ],
    },
  ];
  const workItems = [
    {
      id: 1,
      class: "education-item style-display",
      icon: "fa-solid fa-briefcase",
      h6: "Cyber Security Intern",
      p: "Coop Training",
      history: [
        { id: 1, name: "Saudi Arabia", class: "country" },
        { id: 2, name: "Jan 2022 - " },
        { id: 3, name: "Jan 2023" },
      ],
    },
    {
      id: 2,
      class: "education-item-border education-item style-display",
      icon: "fa-solid fa-briefcase",
      h6: "Cyber Security Intern",
      p: "Coop Training",
      history: [
        { id: 1, name: "Saudi Arabia", class: "country" },
        { id: 2, name: "Jan 2022 - " },
        { id: 3, name: "Jan 2023" },
      ],
    },
  ];

  return (
    <div className="main-personal-information-container">
      <div className="personal-information style-defualt">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h5 className="title-person">Personal Information</h5>
            </div>
            {personalInformation.map((person) => (
              <div className="col-6" key={person.id}>
                <div className="person-information style-display">
                  <span className="icon-defualt">
                    <i className={person.icon}></i>
                  </span>
                  <div className="person-details style-same">
                    <p>{person.p}</p>
                    <h6>{person.h6}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="personal-education style-defualt">
        <div className="person-eduction">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h5 className="title-person">Education</h5>
              </div>
              {educationItems.map((educat) => (
                <div className="col-12" key={educat.id}>
                  <div className={educat.class}>
                    <span className="icon-defualt">
                      <i className={educat.icon}></i>
                    </span>
                    <div className="education-item-details style-same">
                      <h6>{educat.h6}</h6>
                      <p>{educat.p}</p>
                      {educat.history.map((item) => (
                        <span className={item.class} key={item.id}>
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="personal-education style-defualt">
        <div className="person-eduction">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h5 className="title-person">Work Experience</h5>
              </div>
              {workItems.map((work) => (
                <div className="col-12" key={work.id}>
                  <div className={work.class}>
                    <span className="icon-defualt">
                      <i className={work.icon}></i>
                    </span>
                    <div className="education-item-details style-same">
                      <h6>{work.h6}</h6>
                      <p>{work.p}</p>
                      {work.history.map((item) => (
                        <span className={item.class} key={item.id}>
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
