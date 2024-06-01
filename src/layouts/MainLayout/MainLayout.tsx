import { Outlet } from "react-router-dom";
import Container from "@components/common/Container/Container";
import Header from "@components/common/Header/Header";
import Wrapper from "@components/common/Wrapper/Wrapper";
import Footer from "@components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default MainLayout;
