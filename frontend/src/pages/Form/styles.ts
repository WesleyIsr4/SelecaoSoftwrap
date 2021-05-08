import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 2rem;
  padding: 0 2rem;
  font-weight: 500;
  border-bottom: 1px solid #353535;

  display: flex;

  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    color: #ff4c00;
    transition: 0.2s;

    &:hover {
      color: #e34400;
    }
  }
`;

export const Content = styled.div`
  width: 500px;
  /* height: 600px; */
  background: #2a2835;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    padding: 2rem;

    button {
      margin-top: 3rem;
    }
  }
`;
