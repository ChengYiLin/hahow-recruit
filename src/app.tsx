import { FC } from "react";
import styled from "styled-components";
import ResetCSS from "./styles/resetCSS";

const Title = styled.div`
    color: red;
`;

const App: FC = () => {
    return (
        <>
            <ResetCSS />
            <Title>Hello React 18</Title>
        </>
    );
};

export default App;
