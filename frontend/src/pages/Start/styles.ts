import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bar = styled.div`
  width: 100%;
  height: 40px;

  color: #000;

  margin-top: 2rem;

  button {
    width: 170px;
    height: 40px;

    background: #ff4c00;
    color: #f1f1f1;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    cursor: pointer;

    font-weight: 500;

    transition: 0.2s;
    &:hover {
      background: #f03310;
    }
  }
`;
