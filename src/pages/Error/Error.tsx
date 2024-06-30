import Container from "@components/common/Container/Container";
import Wrapper from "@components/common/Wrapper/Wrapper";
import { appPaths } from "@routes/paths";
import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const { container } = styles;

const Error = () => {
  return (
    <Container>
      <Wrapper>
        <div className={container}>
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link title="Go To Home" to={appPaths.home} replace={true}>
            Go to Home
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Error;
