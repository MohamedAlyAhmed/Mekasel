import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { CategoryCard, ProductCard } from "@components/eCommerce";
import { appPaths } from "@routes/paths";

const Home = () => {
    return (
        <Wrapper>
            <Seo
                title="Home"
                link={appPaths.home}
            />
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
