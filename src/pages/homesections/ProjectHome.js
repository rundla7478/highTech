import React, {useContext} from 'react';
import ProjectContext from '../../context/ProjectContext';

const ProjectHome = () => {
	const projectData = useContext(ProjectContext);
    return(
       <>
        <div className="container-fluid project py-5 mb-5">
        <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
        <h5 className="text-primary">{projectData.projectTitle}</h5>
        <h1>{projectData.projectSubtitle}</h1>
        </div>
        <div className="row g-5">
         {projectData.projects.map((project, index) => (
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`.${index + 1}s`} key={index}>
        <div className="project-item">
        <div className="project-img">
        <img src={project.image} className="img-fluid w-100 rounded" alt=""/>
        <div className="project-content">
        <a href={project.url} className="text-center">
        <h4 className="text-secondary">{project.title}</h4>
        <p className="m-0 text-white">{project.subTitle}</p>
        </a>
        </div>
        </div>
        </div>
        </div>
        ))}

        </div>
        </div>
        </div>
       </>
   );
}
export default ProjectHome;