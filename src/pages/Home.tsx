import Wrapper from "@components/common/Wrapper/Wrapper";
import { CategoryCard, ProductCard } from "@components/eCommerce";

const Home = () => {
    return (
        <Wrapper>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                <CategoryCard />
                <ProductCard />
            </div>
        </Wrapper>
    );
};

export default Home;
