import "./styles.css";  // Import the CSS file
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "")}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
