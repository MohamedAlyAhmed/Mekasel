import { useNavigate } from "react-router-dom";
import joystick from "@assets/images/joystick.png";
import Button from "@components/ui/Button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./CategoryCard.module.scss";

const { categoryContainer, imgContainer, titleAndButton } = styles;

const CategoryCard = () => {
    const navigation = useNavigate();
    return (
        <div className={categoryContainer}>
            <div className={titleAndButton}>
                <p>Game Joysticks</p>
                <Button
                    title="Shop Now"
                    endIcon={<MdOutlineKeyboardArrowRight />}
                    onClick={() => {navigation("/products/joysticks")}}
                >
                    shop now
                </Button>
            </div>
            <div className={imgContainer}>
                <img src={joystick} alt="category" />
            </div>
        </div>
    );
};

export default CategoryCard;
