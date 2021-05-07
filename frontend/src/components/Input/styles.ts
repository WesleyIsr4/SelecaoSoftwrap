import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #312f3d;
  color: #666360;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 16px;
  width: 380px;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff4c00;
      border-color: #ff4c00;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff4c00;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;

    &::placeholder {
      color: #666360;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;

  p {
    color: red;
  }
`;
