import React from 'react';
import { useHistory } from 'react-router-dom';
import Body from '../../components/Body';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container, Bar } from './styles';

const Start: React.FC = () => {
  const history = useHistory();

  function newTask() {
    history.push('/form');
  }
  return (
    <Container>
      <Header />
      <Bar>
        <Button onClick={newTask}>+ Criar cadastro</Button>
      </Bar>
      <Body />
    </Container>
  );
};

export default Start;
