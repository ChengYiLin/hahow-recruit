import { FC, ReactNode } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

interface IProps {
    children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Container;
