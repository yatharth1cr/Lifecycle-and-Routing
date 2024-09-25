import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            <i className="fa-solid fa-house"></i>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/articles">
            <i className="fa-solid fa-newspaper"></i>
            Articles
          </NavLink>
        </li>

        <li>
          <NavLink to="/people">
            <i className="fa-solid fa-people-group"></i>
            People
          </NavLink>
        </li>

        <li>
          <NavLink to="/books">
            <i className="fa-solid fa-book"></i> Books
          </NavLink>
        </li>

        <li>
          <NavLink to="/help">
            <i className="fa-solid fa-circle-info"></i>
            Help & Support
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
