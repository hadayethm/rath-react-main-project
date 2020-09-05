import React from 'react'
import Banner from '../components/home-one/Banner'
import About from '../components/home-one/About'
import Video from '../components/home-one/video'
import Subscribe from '../components/home-one/Subscribe'
import AppScreen from '../components/home-one/Appscreen'
import Downloads from '../components/home-one/Downloads'
import Features from '../components/home-one/Features'

 const  Home1 =() => {
    return (
        <>
            <Banner />
            <About />
            <Video />
            <Subscribe />
            <AppScreen />
            <Downloads/>
            <Features />
        </>
    );
};
export default Home1;