import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forms from '../pages/Form';
import Start from '../pages/Start';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/form" exact component={Forms} />
      <Route path="/form/:id" exact component={Forms} />
    </Switch>
  );
};

export default Routes;
