import React from 'react';
import Banner from '../components/Banner';
import Mattresses from '../components/Mattresses';
import MissionVision from '../components/MissionVision';
import Offers from '../components/Offers';
import PresidentMsg from '../components/PresidentMsg'
import VicePresidentMsg from '../components/VicePresidentMsg';

const Home = () => {
    return (
        <>

        <Banner/>
        <Mattresses/>    
        <PresidentMsg/>
        <VicePresidentMsg/>
        <MissionVision/>
        <Offers/>
        </>
    );
};

export default Home;