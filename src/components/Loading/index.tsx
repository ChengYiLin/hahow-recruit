import { FC } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.p`
    font-size: 32px;
    animation: ${rotate} 1.5s linear infinite;
`;

interface IProps {
    isLoading: boolean;
}

const Loading: FC<IProps> = ({ isLoading }) => {
    return isLoading
        ? createPortal(
              <Wrapper>
                  <LoadingIcon>&#8987;</LoadingIcon>
              </Wrapper>,
              document.body
          )
        : null;
};

export default Loading;
