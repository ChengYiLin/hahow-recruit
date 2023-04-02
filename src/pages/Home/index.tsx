import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 32px;
    font-weight: bolder;
    text-align: center;
    padding: 32px;
    color: ${(props) => props.theme.palette.secondary.text};
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GoDemoButton = styled(Link)`
    padding: 12px 24px;
    color: #ffffff;
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.primary.main};

    &:hover {
        background-color: ${(props) => props.theme.palette.primary.hover};
    }
`;

const Home: FC = () => {
    return (
        <div>
            <Title>Hi, I&apos;m Martin &#9995;</Title>
            <ButtonWrapper>
                <GoDemoButton to="/heroes">Go Demo</GoDemoButton>
            </ButtonWrapper>
        </div>
    );
};

export default Home;
