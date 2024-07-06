import { Outlet } from "react-router-dom";
import Container from "@components/common/Container/Container";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <Container>
      <Header />
        <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
