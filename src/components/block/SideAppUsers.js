import "./styles/SideAppUsers.scss";

export default function SideAppUsers() {
  const users = [
    {
      id: 1,
      className: "content-item",
      userName: "Frances R. Kostka",
      country: "Riyadh Arabia",
      educational:
        "Bachelor in Information Technology and Cyber Security (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 2,
      className: "content-item check-user",
      userName: "Aaliyah Sanderson",
      country: "Saudi Arabia",
      educational: "Bachelor in Marketing (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 3,
      className: "content-item",
      userName: "Michael D. McKee",
      country: "Saudi Arabia",
      educational: "Bachelor in Finance (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 4,
      className: "content-item",
      userName: "Christel R. Sclafani",
      country: "Saudi Arabia",
      educational: "Bachelor in Bio-chemical Engineering (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 5,
      className: "content-item",
      userName: "Jerry S. Pollock",
      country: "Saudi Arabia",
      educational: "Bachelor in Marketing (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 6,
      className: "content-item",
      userName: "Jerry S. Pollock",
      country: "Saudi Arabia",
      educational: "Bachelor in Marketing (2023 - 2023)",
      userCity: [
        { id: 1, city: "New York" },
        { id: 2, city: "Marketing" },
        { id: 3, city: "London" },
      ],
    },
    {
      id: 7,
      className: "content-item",
      userName: "Aaliyah Sanderson",
      country: "Saudi Arabia",
      educational: "Bachelor in Marketing (2023 - 2023)",
      job: "Marketing and Business Development Intern - Disney (2023 - 2023)",
    },
  ];

  return (
    <div className="main-side-app-users">
      {users.map((user) => (
        <div className={user.className} key={user.id}>
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
