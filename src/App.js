import React, { Fragment } from 'react';
import MainContainer from 'containers/mainContainer/MainContainer';
import Footer from 'components/footer/Footer';
import Header from "./components/header/Header";

const App = () => (
    <Fragment>
        <Header />
        <MainContainer />
        <Footer />
    </Fragment>
);

export default App;
