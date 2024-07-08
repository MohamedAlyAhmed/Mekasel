import Seo from "@components/common/Seo/Seo";
import { appPaths } from "@routes/paths";

const Register = () => {
    return (
        <div>
            <Seo title="Login" link={appPaths.register} />
            Register
        </div>
    );
};

export default Register;
