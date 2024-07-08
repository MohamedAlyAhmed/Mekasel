import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const Categories = () => {
    return (
        <div>
            <Seo title="Categories" link={appPaths.categories} />
            Categories
        </div>
    );
};

export default Categories;
