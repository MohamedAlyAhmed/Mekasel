import Seo from "@components/common/Seo/Seo";
import { CategoryCard } from "@components/eCommerce";
import { appPaths } from "@routes/paths";
import { getCategoriesThunk } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import styles from "./Home.module.scss";

const { categoriesContainer } = styles;

const Home = () => {
    const dispatch = useAppDispatch();

    const {
        records: categoriesData,
        loading,
        error,
    } = useAppSelector((state) => state.categories);

    useEffect(() => {
        if (categoriesData.length === 0) {
            dispatch(getCategoriesThunk());
        }
    }, [dispatch, categoriesData]);

    const getCategoriesContent = () => {
        if (loading === "pending") {
            return <div>Loading ...</div>;
        }

        if (error && !categoriesData.length) {
            return <div>error</div>;
        }

        if (categoriesData.length > 0) {
            return (
                <>
                    {categoriesData.map(({ id, title, prefix, img }) => (
                        <CategoryCard
                            key={id}
                            title={title}
                            prefix={prefix}
                            img={img}
                        />
                    ))}
                </>
            );
        }
    };

    return (
        <>
            <Seo title="Home" link={appPaths.home} />
            <div className={categoriesContainer}>{getCategoriesContent()}</div>
        </>
    );
};

export default Home;
