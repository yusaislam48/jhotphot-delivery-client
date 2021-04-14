import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Counter></Counter>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;