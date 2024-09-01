import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const AboutUs = () => {
    return (
        <div>
            <Seo title="About Us" link={appPaths.aboutUS} />
            <Wrapper>
                <EmptyMessage message="About us page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default AboutUs;
