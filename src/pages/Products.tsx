import { useParams } from "react-router-dom";

const Products = () => {
    const { prefix } = useParams();
    return <div>Products from {prefix}</div>;
};

export default Products;
