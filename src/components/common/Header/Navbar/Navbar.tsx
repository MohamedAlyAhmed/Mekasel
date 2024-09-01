import Wrapper from "@components/common/Wrapper/Wrapper";
import { appPaths } from "@routes/paths";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const { navbarContainer, active } = styles;

const navbarPages = [
  {
    title: "Home",
    path: appPaths.home,
  },
  {
    title: "About Us",
    path: appPaths.aboutUS,
  },
  {
    title: "Contact Us",
    path: appPaths.contactUs,
  },
];

const Navbar = () => {
  return (
    <nav className={navbarContainer}>
      <Wrapper>
        <ul>
          {navbarPages.map((page) => (
            <NavLink key={page.path} to={page.path} className={({ isActive }) => (isActive ? active : "")}>
              <li title={page.title}>
                {page.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
