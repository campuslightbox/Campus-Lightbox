import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Login />
    </Container>
  </Fragment>
);

export default App;
