import React, { Component } from 'react';

//import zone
import HomeTopZone from '../zoneOnHomePage/HomeTopZone';
import CardsZone from '../zoneOnHomePage/CardsZone';
import AboutUsZone from '../zoneOnHomePage/AboutUsZone';
import WorkZone from '../zoneOnHomePage/WorkZone';
import TestimonialZone from '../zoneOnHomePage/TestimonialZone';

export default function Home(){
    return(
        <>
            <HomeTopZone />
            <CardsZone />
            <AboutUsZone />
            <WorkZone />
            <TestimonialZone />
        </>
    )
}