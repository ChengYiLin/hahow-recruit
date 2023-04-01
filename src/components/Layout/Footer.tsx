import { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../Container";

const PageFooter = styled.footer`
    flex: 0 0 60px;
    border-top: 1px solid black;
`;

const FooterWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const CopyrightText = styled.p`
    color: gray;
`;

const Footer: FC = () => {
    return (
        <PageFooter>
            <FooterWrapper>
                <CopyrightText>Hahow x Martin Lin © 2023</CopyrightText>
            </FooterWrapper>
        </PageFooter>
    );
};

export default Footer;
