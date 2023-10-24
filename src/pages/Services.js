import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import ServiceProvider from '../context/ServiceProvider';
import ServiceHome from './homesections/ServiceHome';
import HeaderSection from '../headersection/HeaderSection';

const Services = () => {
   return(
       <>
       <HeaderSection title="Services" />

         <SectionProvider>
          <CustomerType />
         </SectionProvider>

         <ServiceProvider>
          <ServiceHome />
         </ServiceProvider>

       </>
   );
}
export default Services;