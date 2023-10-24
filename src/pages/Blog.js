import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import BlogProvider from '../context/BlogProvider';
import BlogHome from './homesections/BlogHome';
import HeaderSection from '../headersection/HeaderSection';

const Blog = () => {
  return(
     <>
     <HeaderSection title="Our Blog" />

        <SectionProvider>
         <CustomerType />
        </SectionProvider>

        <BlogProvider>
         <BlogHome />
        </BlogProvider>


     </>
  );
}
export default Blog;