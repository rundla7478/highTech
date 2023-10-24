import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import AboutProvider from '../context/AboutProvider';
import AboutHome from './homesections/AboutHome';
import TeamProvider from '../context/TeamProvider';
import TeamHome from './homesections/TeamHome';
import HeaderSection from '../headersection/HeaderSection';

const About = () => {
    return(
       <>
       <HeaderSection title="About Us" />
         
        <SectionProvider>
         <CustomerType />
        </SectionProvider>

        <AboutProvider>
         <AboutHome />
        </AboutProvider>

        <TeamProvider>
         <TeamHome />
        </TeamProvider>

       </>
    );
}
export default About;