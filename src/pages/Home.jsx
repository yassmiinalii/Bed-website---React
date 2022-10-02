import React from 'react';
import Banner from '../components/Banner';
import Mattresses from '../components/Mattresses';
import MissionVision from '../components/MissionVision';
import PresidentMsg from '../components/PresidentMsg'
import VicePresidentMsg from '../components/VicePresidentMsg';

const Home = () => {
    return (
        <>

        <Banner/>
        <div className='mx-5'>
        {/* <Mattresses/>     */}
        <PresidentMsg/>
        <VicePresidentMsg/>
        <MissionVision/>
        </div>
        </>
    );
};

export default Home;