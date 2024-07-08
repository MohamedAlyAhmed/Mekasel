import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const ContactUs = () => {
    return (
        <div>
            <Seo title="Contact Us" link={appPaths.contactUs} />
            ContactUs
        </div>
    );
};

export default ContactUs;
