import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const Categories = () => {
    return (
        <div>
            <Seo title="Categories" link={appPaths.categories} />
            <Wrapper>
                <EmptyMessage message="Categories page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default Categories;
