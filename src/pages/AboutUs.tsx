import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const AboutUs = () => {
    return (
        <div>
            <Seo title="About Us" link={appPaths.aboutUS} />
            AboutUs
        </div>
    );
};

export default AboutUs;
