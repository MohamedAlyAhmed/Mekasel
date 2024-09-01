import { TCategory } from "@customTypes/categories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.scss";
import { Button } from "@components/ui";

const { categoryContainer, imgContainer, titleAndButton } = styles;

const CategoryCard = ({ title, img, prefix }: TCategory) => {
    const navigation = useNavigate();
    return (
        <div className={categoryContainer}>
            <div className={titleAndButton}>
                <p>{title}</p>
                <Button
                    title="Shop Now"
                    endIcon={<MdOutlineKeyboardArrowRight />}
                    onClick={() => {
                        navigation(`/products/${prefix}`);
                    }}
                >
                    shop now
                </Button>
            </div>
            <div className={imgContainer}>
                <img src={img} alt={title} />
            </div>
        </div>
    );
};

export default CategoryCard;
