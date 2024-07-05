import Container from "@components/common/Container/Container";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { appPaths } from "@routes/paths";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";

const { container } = styles;

const Error = () => {
    const error = useRouteError();

    let errorStatus: string;
    let errorStatusText: string;

    if (isRouteErrorResponse(error)) {
        errorStatus = `${error.status}`;
        errorStatusText = error.statusText;
    } else {
        errorStatus = "404";
        errorStatusText = "Page Not Found";
    }

    return (
        <Container>
            <Wrapper>
                <div className={container}>
                    <h1>{errorStatus}</h1>
                    <p>{errorStatusText}</p>
                    <Link title="Go To Home" to={appPaths.home} replace={true}>
                        Go to Home
                    </Link>
                </div>
            </Wrapper>
        </Container>
    );
};

export default Error;
