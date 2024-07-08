import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const Wishlist = () => {
    return (
        <div>
            <Seo title="Wishlist" link={appPaths.wishlist} />
            Wishlist
        </div>
    );
};

export default Wishlist;
