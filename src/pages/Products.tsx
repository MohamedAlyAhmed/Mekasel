import Seo from "@components/common/Seo/Seo";
import { useParams } from "react-router-dom";

const Products = () => {
    const { prefix } = useParams();
    return (
        <div>
            <Seo title={prefix} link={`/products/${prefix}`} />
            Products from {prefix}
        </div>
    );
};

export default Products;
