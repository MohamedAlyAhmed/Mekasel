import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const ContactUs = () => {
    return (
        <div>
            <Seo title="Contact Us" link={appPaths.contactUs} />
            <Wrapper>
                <EmptyMessage message="Contact us page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default ContactUs;
