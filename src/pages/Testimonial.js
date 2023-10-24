import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import TestimonialProvider from '../context/TestimonialProvider';
import TestimonialHome from './homesections/TestimonialHome';
import HeaderSection from '../headersection/HeaderSection';

const Testimonial = () => {
  return(
     <>
     <HeaderSection title="Testimonial" />
      
      <SectionProvider>
       <CustomerType />
      </SectionProvider>

     <TestimonialProvider>
          <TestimonialHome />
        </TestimonialProvider>


     </>
  );
}
export default Testimonial;