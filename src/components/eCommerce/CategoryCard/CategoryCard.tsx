import { Button } from "@components/ui";
import { TCategory } from "@customTypes/categories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.scss";

const { categoryContainer, imgContainer, titleAndButton } = styles;

const CategoryCard = ({ title, img, prefix }: TCategory) => {
    const navigation = useNavigate();
    const loading = Boolean(prefix);

    return (
        <div className={categoryContainer}>
            <div className={titleAndButton}>
                <p>{title ?? <Skeleton />}</p>
                <Button
                    title="Shop Now"
                    disabled={!loading}
                    loading={!loading}
                    loadingSkeleton={!loading}
                    endIcon={!loading ? null : <MdOutlineKeyboardArrowRight />}
                    onClick={() => {
                        navigation(`/products/${prefix}`);
                    }}
                >
                    shop now
                </Button>
            </div>
            <div className={imgContainer}>
                {img ? (
                    <img src={img} alt={title} />
                ) : (
                    <Skeleton
                        circle={true}
                        style={{ width: "100%", height: "100%" }}
                    />
                )}
            </div>
        </div>
    );
};

export default CategoryCard;
