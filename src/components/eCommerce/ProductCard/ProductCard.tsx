import joystick from "@assets/images/joystick.png";
import Button from "@components/ui/Button/Button";
import classNames from "classnames";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const {
    productContainer,
    header,
    imgContainer,
    productName,
    price,
    button,
    showButtonStyle,
    content,
    changeHeight,
    autoHeight,
} = styles;

const ProductCard = () => {
    const [showButton, setShowButton] = useState(false);

    return (
        <div
            className={productContainer}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <div className={classNames(content, showButton ? autoHeight : "")}>
                <div className={header}>
                    <Link title="Show Category" to="/products/joystick">
                        Joysticks
                    </Link>
                    <GoHeart title="Add To Wishlist" />
                </div>
                <div
                    className={classNames(
                        imgContainer,
                        showButton ? changeHeight : ""
                    )}
                    title="Show Details"
                >
                    <img src={joystick} alt="product" />
                </div>
                <p className={productName} title="Show Details">
                    Sony DualSense Wireless Controller for PlayStation 5
                </p>
                <div className={price}>
                    <p>$1900</p>
                    <p>$2500</p>
                </div>
            </div>
            <Button
                className={classNames(
                    button,
                    showButton ? showButtonStyle : ""
                )}
                endIcon={<PiShoppingCartSimpleLight />}
                title="Add To Cart"
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
