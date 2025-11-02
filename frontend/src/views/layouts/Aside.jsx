import "../../assets/css/aside.css";
import { Link } from "react-router";
import defaultProfile from "../../assets/image/default_profile.jpg";
import { _route } from "../../router";

export default function Aside() {
  const List = {
    "Dashboard": "dashboard",
    "Users": "",
    "Team": "",
    "News": "", //super, leader
    "Projects": "project", //super, pm
    "Tasks": "",
    "Site": "" //super, admin
  };

  return (
    <aside id="aside">
      <div className="wrapper">
        <div className="profile d-flex align-items-center mb-3">
          <span className="profile-image rounded-circle">
            <img src={defaultProfile} className="img-fluid" alt="" />
          </span>
          <span className="d-inline-block text-truncate">Aung Htet Paingdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</span>
        </div>
        <div className="border-bottom d-flex gap-2">
          <i className="bi bi-envelope-fill position-relative">
            <a href=""></a>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </i>
          <i className="bi bi-bell-fill position-relative">
            <a href=""></a>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </i>
          <i className="bi bi-bug-fill position-relative">
            <a href=""></a>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </i>
          <i className="bi bi-gear-fill"></i>
          <i className="bi bi-door-open-fill ms-auto"></i>
        </div>

        <nav>
          <ul>
            {Object.entries(List).map(([title, route], index) => (
              <li key={index}>
                <Link to={ route ? _route(route) : "/" }>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
