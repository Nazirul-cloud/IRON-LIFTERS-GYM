import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categorys from '../Categories/Categorys';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Categorys/>
            <Footer></Footer>
        </div>
    );
};

export default Home;