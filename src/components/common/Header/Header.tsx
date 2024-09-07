import Logo from "@assets/icons/MekaselLogo.svg?react";
import DarkMode from "@components/common/DarkMode/DarkMode";
import Navbar from "@components/common/Header/Navbar/Navbar";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { appPaths } from "@routes/paths";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/selectors";
import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const {
    header,
    logoContainer,
    headerWrapper,
    iconsContainer,
    cartContainer,
    pumpCartQuantity,
} = styles;

const Header = () => {
    const totalCartQuantity = useAppSelector(getCartTotalQuantitySelector);
    const [animateCart, setAnimateCart] = useState(false);

    useEffect(() => {
        if (!totalCartQuantity) {
            return;
        }
        setAnimateCart(true);

        const debounce = setTimeout(() => {
            setAnimateCart(false);
        }, 500);
        return () => clearTimeout(debounce);
    }, [totalCartQuantity]);

    return (
        <header className={header}>
            <Wrapper>
                <div className={headerWrapper}>
                    <NavLink to={appPaths.home}>
                        <div className={logoContainer}>
                            <Logo />
                        </div>
                    </NavLink>
                    <div>Search</div>
                    <div className={iconsContainer}>
                        <DarkMode />
                        <NavLink
                            to={appPaths.login}
                            className={({ isActive }) =>
                                isActive ? styles.activeIcon : ""
                            }
                        >
                            <IoPersonCircleOutline title="Profile" />
                        </NavLink>
                        <NavLink
                            to={appPaths.cart}
                            className={({ isActive }) =>
                                isActive ? styles.activeIcon : ""
                            }
                        >
                            <div className={cartContainer}>
                                <PiShoppingCartSimpleLight title="Cart" />
                                <p
                                    className={
                                        animateCart ? pumpCartQuantity : ""
                                    }
                                >
                                    {totalCartQuantity}
                                </p>
                            </div>
                        </NavLink>
                        <NavLink
                            to={appPaths.wishlist}
                            className={({ isActive }) =>
                                isActive ? styles.activeIcon : ""
                            }
                        >
                            <GoHeart title="Wishlist" />
                        </NavLink>
                    </div>
                </div>
            </Wrapper>
            <Navbar />
        </header>
    );
};

export default Header;
