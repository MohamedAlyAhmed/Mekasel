import Logo from "@assets/icons/MekaselLogo.svg?react";
import Navbar from "@components/common/Header/Navbar/Navbar";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { GoHeart } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import styles from "./Header.module.scss";

const { header, logoContainer, headerWrapper, iconsContainer, cartContainer } =
  styles;

const Header = () => {
  return (
    <header className={header}>
      <Wrapper>
        <div className={headerWrapper}>
          <div className={logoContainer}>
            <Logo />
          </div>
          <div>Search</div>
          <div className={iconsContainer}>
            <IoPersonCircleOutline title="Profile" />
            <div className={cartContainer}>
              <PiShoppingCartSimpleLight title="Cart" />
              <p>0</p>
            </div>
            <GoHeart title="Wish List" />
          </div>
        </div>
      </Wrapper>
      <Navbar />
    </header>
  );
};

export default Header;
