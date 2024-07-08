import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const Login = () => {
    return (
        <div>
            <Seo title="Login" link={appPaths.login} />
            Login
        </div>
    );
};

export default Login;
