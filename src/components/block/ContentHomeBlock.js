import "./styles/ContentHomeBlock.scss";

export default function ContentHomeBlock() {
  const users = [
    {
      id: 1,
      userName: "Aaliyah Sanderson",
      country: "Riyadh, Saudi Arabia",
      educational: "Bachelor - Cambridge University (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 2,
      userName: "John Doe",
      country: "Bostom, USA",
      educational: "Bachelor - MIT (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 3,
      userName: "Thomas Matt",
      country: "Edinburgh, UK",
      educational: "Bachelor - Harvard University (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 4,
      userName: "Kamilia Smith",
      country: "London, UK",
      educational: "Bachelor - Boston University (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 5,
      userName: "Roy Jade",
      country: "Cambridge,  UK",
      educational: "Bachelor - Yale (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 6,
      userName: "Ahmed Salman",
      country: "New York, USA",
      educational: "Bachelor - Cambridge University (2023 - 2023)",
      job: "Marketing and Business Development Intern - Disney (2023 - 2023)",
    },
  ];

  return (
    <div className="main-content-items">
      {users.map((user) => (
        <div className="content-item" key={user.id}>
          <div className="user-item">
            <input type="checkbox" className="checkbox-item" />
            <span className="img-user">AS</span>
          </div>
          <div className="user-ditals">
            <h4>{user.userName}</h4>
            <h6>{user.country}</h6>
            <p>{user.educational}</p>
            <p>{user.job}</p>
            <span className="tag-item">#top_candidate</span>
            <span className="tag-item">#top_candidate</span>
            <div className="user-city">
              {user.userCity?.map((c) => (
                <span key={c.id}>{c.city}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
