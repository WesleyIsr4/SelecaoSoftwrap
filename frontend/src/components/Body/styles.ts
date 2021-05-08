import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th,
  td {
    padding: 1rem 2rem;
    text-align: center;
  }

  tr th:first-child,
  tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  tr th:last-child,
  tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;

export const Thead = styled.thead`
  background: #2a2835;
`;

export const Tbody = styled.tbody`
  background: #2a2835;
  opacity: 0.5;

  svg {
    cursor: pointer;
    margin-left: 10px;

    color: #fff;
    &:hover {
      color: #ff4c00;
    }
  }

  td:hover {
    opacity: 1;
    cursor: pointer;
  }

  transition: 0.2s;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;

  cursor: pointer;
`;
