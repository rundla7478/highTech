import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import ContactProvider from '../context/ContactProvider';
import ContactHome from './homesections/ContactHome';
import HeaderSection from '../headersection/HeaderSection';


const Contact = () => {
   return(
      <>
      <HeaderSection title="Contact Us" />
         <SectionProvider>
         <CustomerType />
         </SectionProvider>

        <ContactProvider>
         <ContactHome />
        </ContactProvider>


      </>
   );
}
export default Contact;