import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiUser,
  FiMail,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div>
        <h2 className="logo">
          Dev<span>Hub</span>
        </h2>

        <p className="logo-subtitle">
          Portfolio
        </p>

        <nav>

          <NavLink to="/">
            <FiGrid />
            Dashboard
          </NavLink>

          <NavLink to="/projects">
            <FiFolder />
            Projects
          </NavLink>

          <NavLink to="/about">
            <FiUser />
            About
          </NavLink>

        </nav>
      </div>

      <div className="sidebar-contact">

        <h4>Contact</h4>

        <a
          href="https://t.me/Lebiga5"
          target="_blank"
        >
          <FaTelegramPlane />
          @Lebiga5
        </a>

       <a href="mailto:atamancuck2006@gmail.com">
  <FiMail />
  <span>atamancuck2006@gmail.com</span>
</a>

      </div>

    </aside>
  );
}