import { FC } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../Container";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const PageContent = styled.main`
    flex: 1 0 auto;
`;

const Layout: FC = () => {
    return (
        <Wrapper>
            <Header />
            <PageContent>
                <Container>
                    <Outlet />
                </Container>
            </PageContent>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
