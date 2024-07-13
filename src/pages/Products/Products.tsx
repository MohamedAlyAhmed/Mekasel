import Seo from "@components/common/Seo/Seo";
import { ProductCard } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    cleanUpProducts,
    getProductsByCatPrefix,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";

const { productsContainer } = styles;

const Products = () => {
    const { prefix } = useParams();

    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProductsByCatPrefix(prefix as string));

        return () => {
            dispatch(cleanUpProducts());
        };
    }, [dispatch, prefix]);

    const getContent = () => {
        if (loading === "pending") {
            return <div>Loading ...</div>;
        }

        if (error && !records.length) {
            return <div>error</div>;
        }

        if (records.length > 0) {
            return (
                <>
                    {records?.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </>
            );
        }
    };
    return (
        <div>
            <Seo title={prefix} link={`/products/${prefix}`} />
            <div className={productsContainer}>{getContent()}</div>
        </div>
    );
};

export default Products;
