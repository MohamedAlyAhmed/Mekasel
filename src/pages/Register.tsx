import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const Register = () => {
    return (
        <div>
            <Seo title="Register" link={appPaths.register} />
            <Wrapper>
                <EmptyMessage message="Register page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default Register;
