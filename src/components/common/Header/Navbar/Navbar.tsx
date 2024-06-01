import Wrapper from "@components/common/Wrapper/Wrapper";
import styles from "./Navbar.module.scss";

const { navbarContainer } = styles;

const Navbar = () => {
  return <nav className={navbarContainer}>
    <Wrapper>
        <ul>
            <li title="Home">Home</li>
            <li title="Products">Products</li>
            <li title="About Us">about us</li>
            <li title="Contact Us">contact us</li>
        </ul>
    </Wrapper>
  </nav>;
};

export default Navbar;
