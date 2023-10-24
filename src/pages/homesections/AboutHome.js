import React, {useContext} from 'react';
import AboutContext from '../../context/AboutContext';

const AboutHome = () => {
	const aboutData = useContext(AboutContext);
  return(
     <>
       <div className="container-fluid py-5 my-5">
        <div className="container pt-5">
        <div className="row g-5">
        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
        <div className="h-100 position-relative">
        <img src={aboutData.imageOne} className="img-fluid w-75 rounded" alt="" style={{marginBottom: '25%'}} />
        <div className="position-absolute w-75" style={{top: '25%', left: '25%'}}>
        <img src={aboutData.imageTwo} className="img-fluid w-100 rounded" alt=""/>
        </div>
        </div>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
        <h5 className="text-primary">{aboutData.title}</h5>
        <h1 className="mb-4">{aboutData.subtitle}</h1>
        <p>{aboutData.contentOne}</p>
        <p className="mb-4">{aboutData.contentTwo}</p>
        <a href={aboutData.pageLink} className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
        </div>
        </div>
        </div>
        </div>
     </>
  );
}
export default AboutHome;