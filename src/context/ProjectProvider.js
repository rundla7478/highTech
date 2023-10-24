import React from 'react';
import ProjectContext from './ProjectContext';

const ProjectProvider = ({children}) => {
	  const projectData = {
	  	  projectTitle: 'Our Project',
	  	  projectSubtitle: 'Our Recently Completed Projects',
	  	  projects : [
              {
              	title: 'Web design',
              	subTitle: 'Web Analysis',
              	image: '/img/project-1.jpg',
              	url: '#'
              },
               {
              	title: 'Cyber Security',
              	subTitle: 'Cyber Security Core',
              	image: '/img/project-2.jpg',
              	url: '#'
              },
               {
              	title: 'Mobile Info',
              	subTitle: 'Upcomming Phone',
              	image: '/img/project-3.jpg',
              	url: '#'
              },
               {
              	title: 'Web Development',
              	subTitle: 'Web Analysis',
              	image: '/img/project-4.jpg',
              	url: '#'
              },
               {
              	title: 'Digital Marketing',
              	subTitle: 'Marketing Analysis',
              	image: '/img/project-5.jpg',
              	url: '#'
              },
               {
              	title: 'keyword Research',
              	subTitle: 'keyword Analysis',
              	image: '/img/project-6.jpg',
              	url: '#'
              }
	  	  ]
	  }
    return(
        <>
          <ProjectContext.Provider value={projectData}>
            {children}
          </ProjectContext.Provider>
        </>
    );
}
export default ProjectProvider;