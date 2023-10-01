import "./styles/InternshipProgram.scss";

export default function InternshipProgram() {
  const items = [
    { id: 1, name: "Personal Information", icon: "fa-solid fa-chevron-down" },
    { id: 2, name: "Education", icon: "fa-solid fa-chevron-down" },
    { id: 3, name: "Work Experience", icon: "fa-solid fa-chevron-down" },
    { id: 4, name: "Activity Filter", icon: "fa-solid fa-chevron-down" },
    { id: 5, name: "Advanced Filter" },
  ];

  return (
    <div className="main-internship-container">
      <div className="main-nav-item">
        <h4>London Internship Program</h4>
        <span>London</span>
      </div>
      <div className="main-search-item">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Serach by name, edu, exp or #tag" />
      </div>
      <div className="main-item-filter-container">
        <div className="filter-item-header">
          <h6>Filters</h6>
          <span>0 Selected</span>
        </div>
        {items.map((item) => (
          <div className="filter-item" key={item.id}>
            <h6>
              <span className="icon-doc">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              {item.name}
            </h6>
            <span className="icon-arrow">
              <i className={item.icon}></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
