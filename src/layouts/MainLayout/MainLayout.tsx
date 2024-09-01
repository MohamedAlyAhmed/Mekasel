import Container from "@components/common/Container/Container";
import Footer from "@components/common/Footer/Footer";
import Header from "@components/common/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <Container>
            <Header />
            <div style={{ minHeight: "100dvh" } as React.CSSProperties}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    );
};

export default MainLayout;
