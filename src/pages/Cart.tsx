import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const Cart = () => {
    return (
        <div>
            <Seo title="Cart" link={appPaths.cart} />
        </div>
    );
};

export default Cart;
