import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import Login from './components/Login';
import Navbar from './components/navbar/Navbar';
import Filter from './components/filter/Filter';

const App = () => (
    <Fragment>
        <Navbar />
        <Container>
            <Filter />
        </Container>
    </Fragment>
);

export default App;
