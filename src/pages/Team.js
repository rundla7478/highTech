import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import TeamProvider from '../context/TeamProvider';
import TeamHome from './homesections/TeamHome';
import HeaderSection from '../headersection/HeaderSection';

const Team = () => {
  return(
     <>
     <HeaderSection title="Our Team" />
        <SectionProvider>
         <CustomerType />
        </SectionProvider>

        <TeamProvider>
         <TeamHome />
        </TeamProvider>

     </>
  );
}
export default Team;