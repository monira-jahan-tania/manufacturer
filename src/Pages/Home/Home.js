import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BussinessSummary />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;