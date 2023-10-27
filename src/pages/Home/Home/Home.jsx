import React from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import Banner from '../../../Component/Banner/Banner';
import Chef_Portfolio from '../../../Component/Chef-Portfolio/Chef_Portfolio';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Chef_Portfolio></Chef_Portfolio>
            <Footer></Footer>
        </div>
    );
};

export default Home;