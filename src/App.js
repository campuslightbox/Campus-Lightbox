import React, { Fragment } from 'react';
import MainContainer from './containers/mainContainer/MainContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => (
    <Fragment>
        <Header />
        <MainContainer />
        <Footer />
    </Fragment>
);

export default App;
