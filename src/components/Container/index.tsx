import { FC, ReactNode } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: ${(props) => props.theme.media.sm}) {
        max-width: ${(props) => props.theme.media.sm};
    }

    @media (min-width: ${(props) => props.theme.media.lg}) {
        max-width: ${(props) => props.theme.media.lg};
    }
`;

interface IProps {
    children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Container;
