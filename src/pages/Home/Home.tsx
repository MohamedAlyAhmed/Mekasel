import Seo from "@components/common/Seo/Seo";
import { CategoryCard, GridList } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { appPaths } from "@routes/paths";
import { getCategoriesThunk } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";


const Home = () => {
    const dispatch = useAppDispatch();

    const { records, loading, error } = useAppSelector(
        (state) => state.categories
    );

    useEffect(() => {
        if (records.length === 0) {
            dispatch(getCategoriesThunk());
        }
    }, [dispatch, records]);

    return (
        <>
            <Seo title="Home" link={appPaths.home} />
            <Loading
                status={loading}
                error={error}
                loadingMessage="please wait ..."
            >
                <GridList
                    records={records}
                    renderItem={(record) => <CategoryCard {...record} />}
                    xs={1}
                    sm={1}
                    md={1}
                    lg={2}
                    xl={3}
                />
            </Loading>
        </>
    );
};

export default Home;
