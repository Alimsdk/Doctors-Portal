import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import OurDoctors from '../OurDoctors/OurDoctors';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Reviews></Reviews>
            <OurDoctors></OurDoctors>
            <ContactUs></ContactUs>
            <Doctors></Doctors>
        </>
    );
};

export default Home;