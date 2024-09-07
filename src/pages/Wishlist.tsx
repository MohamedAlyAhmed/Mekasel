import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const Wishlist = () => {
    return (
        <div>
            <Seo title="Wishlist" link={appPaths.wishlist} />
            <Wrapper>
                <EmptyMessage message="Wishlist page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default Wishlist;
