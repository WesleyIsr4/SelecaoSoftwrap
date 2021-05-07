import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GloblStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GloblStyle />
    </BrowserRouter>
  );
};

export default App;
