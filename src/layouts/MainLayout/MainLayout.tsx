import { Outlet } from "react-router-dom";
import Container from "@components/common/Container/Container";
import Wrapper from "@components/common/Wrapper/Wrapper";

const MainLayout = () => {
  return (
    <Container>
      {/* Header */}
      <Wrapper>
        <Outlet />
      </Wrapper>
      {/* Footer */}
    </Container>
  );
};

export default MainLayout;
