import React from 'react';
import SectionProvider from '../context/SectionProvider';
import CustomerType from './homesections/CustomerType';
import ProjectProvider from '../context/ProjectProvider';
import ProjectHome from './homesections/ProjectHome';
import HeaderSection from '../headersection/HeaderSection';

const Project = () => {
   return(
      <>
      <HeaderSection title="Projects" />

        <SectionProvider>
         <CustomerType />
        </SectionProvider>

         
         <ProjectProvider>
          <ProjectHome />
        </ProjectProvider>

      </>
   );
}
export default Project;