import React from 'react';
import Banner from '../Banner/BAnner';
import PopularClasses from '../../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SportyScholar | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;