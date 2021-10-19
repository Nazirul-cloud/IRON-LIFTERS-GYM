import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categorys from '../Categories/Categorys';


const Home = () => {
    return (
        <div>
       
            <Banner></Banner>
            <Categorys/>
           
        </div>
    );
};

export default Home;