import React, {useContext} from 'react';
import ServiceContext from '../../context/ServiceContext';

const ServiceHome = () => {
	const serviceData = useContext(ServiceContext);
   return(
      <>
       <div className="container-fluid services py-5 mb-5">
        <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
        <h5 className="text-primary">{serviceData.serviceTitle}</h5>
        <h1>{serviceData.serviceSubtitle}</h1>
        </div>
        <div className="row g-5 services-inner">
        {serviceData.services.map((service, index) => (
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay={`.${index + 1}s`} key={index}>
        <div className="services-item bg-light">
        <div className="p-4 text-center services-content">
        <div className="services-content-icon">
        <i className={service.icon}></i>
        <h4 className="mb-3">{service.title}</h4>
        <p className="mb-4">{service.content}</p>
        <a href={service.url} className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
export default ServiceHome;