import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Counter from '../Counter/Counter';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TrackOrder from '../TrackOrder/TrackOrder';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Counter></Counter>
            <TrackOrder></TrackOrder>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;