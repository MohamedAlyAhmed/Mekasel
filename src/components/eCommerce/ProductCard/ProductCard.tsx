import { Button } from "@components/ui";
import { TProduct } from "@customTypes/products";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const {
    productContainer,
    header,
    imgContainer,
    productName,
    priceStyle,
    button,
    showButtonStyle,
    content,
    changeHeight,
    autoHeight,
} = styles;

const ProductCard = memo(({ id, title, price, img, cat_prefix }: TProduct) => {
    const [showButton, setShowButton] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const dispatch = useAppDispatch();

    const addToCartHandler = () => {
        setButtonLoading(true);
        dispatch(addToCart(id));
    };

    useEffect(() => {
        if (!buttonLoading) {
            return;
        }

        const debounce = setTimeout(() => {
            setButtonLoading(false);
        }, 500);
        return () => clearTimeout(debounce);
    }, [buttonLoading]);

    return (
        <div
            className={productContainer}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <div className={classNames(content, showButton ? autoHeight : "")}>
                <div className={header}>
                    <Link title="Show Category" to={`/products/${cat_prefix}`}>
                        {cat_prefix}
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
                    <img src={img} alt={title} />
                </div>
                <p className={productName} title={title}>
                    {title}
                </p>
                <div className={priceStyle}>
                    <p>${price.toFixed(2)}</p>
                    {/* <p>$2500</p> */}
                </div>
            </div>
            <Button
                className={classNames(
                    button,
                    showButton ? showButtonStyle : ""
                )}
                endIcon={<PiShoppingCartSimpleLight />}
                title="Add To Cart"
                onClick={addToCartHandler}
                disabled={buttonLoading}
                loading={buttonLoading}
            >
                Add to cart
            </Button>
        </div>
    );
});

export default ProductCard;
