import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import MainContainer from './containers/mainContainer/MainContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = () => (
    <Fragment>
        <Navbar />
        <Header />
        <MainContainer />
        <Footer />
    </Fragment>
);

export default App;
