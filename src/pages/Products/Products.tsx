import Seo from "@components/common/Seo/Seo";
import { GridList, ProductCard } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
    cleanUpProducts,
    getProductsByCatPrefix,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

    return (
        <div>
            <Seo title={prefix} link={`/products/${prefix}`} />
            <Loading status={loading} error={error} loadingMessage="Loading...">
                <GridList
                    records={records}
                    renderItem={(record) => <ProductCard {...record} />}
                    xl={4}
                    spacing={16}
                />
            </Loading>
        </div>
    );
};

export default Products;
