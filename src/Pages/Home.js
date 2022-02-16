import React from 'react'
import HomeHeader from '../Components/HomeComponents/HomeHeader';
import HomeFooter from '../Components/HomeComponents/FooterBanner';
import Grills from '../Components/HomeComponents/Grills';

const Home =()=>{
    return(
        <div>
        <HomeHeader />
        <Grills />
        <HomeFooter />
        </div>
    )
}

export default Home;