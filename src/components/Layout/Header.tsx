import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../Container";

const PageHeader = styled.header`
    flex: 0 0 60px;
    border-bottom: 1px solid black;
`;

const HeadWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Logo = styled(Link)`
    font-size: 24px;
    font-weight: bolder;
    color: black;
`;

const NavigationList = styled.nav`
    list-style: none;
`;

const NavigationItem = styled(NavLink)`
    color: black;
`;

const Header: FC = () => {
    return (
        <PageHeader>
            <HeadWrapper>
                <Logo to="/">Martin</Logo>
                <NavigationList>
                    <NavigationItem to="/hero">Hero</NavigationItem>
                </NavigationList>
            </HeadWrapper>
        </PageHeader>
    );
};

export default Header;
