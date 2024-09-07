import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const Cart = () => {
    return (
        <div>
            <Seo title="Cart" link={appPaths.cart} />
            <Wrapper>
                <EmptyMessage message="Cart page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default Cart;
