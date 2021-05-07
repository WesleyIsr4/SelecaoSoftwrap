import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h2>Olá, vamos fazer alguns cadastros?</h2>
      <p>Clique em criar para fazer um cadastro</p>
    </Container>
  );
};

export default Header;
