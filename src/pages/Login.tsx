import Seo from "@components/common/Seo/Seo";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { EmptyMessage } from "@components/ui";
import { appPaths } from "@routes/paths";

const Login = () => {
    return (
        <div>
            <Seo title="Login" link={appPaths.login} />
            <Wrapper>
                <EmptyMessage message="Login page coming soon..." />
            </Wrapper>
        </div>
    );
};

export default Login;
