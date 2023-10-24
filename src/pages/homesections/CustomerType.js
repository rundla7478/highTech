import React, { useContext } from 'react';
import SectionContext from '../../context/SectionContext';

const CustomerType = () => {
	const sectionData = useContext(SectionContext);
	//console.log(sectionData);
	if (!sectionData) {
    return null; // or return an error message or loading indicator
  }
  return(
      <>
        <div className="container-fluid bg-secondary py-5">
        <div className="container">
        <div className="row">
        {sectionData.map((item, index) => (
        <div className="col-lg-3 wow fadeIn" data-wow-delay={`.${index + 1}s`} key={index}>
        <div className="d-flex counter">
        <h1 className="me-3 text-primary counter-value">{item.value}</h1>
        <h5 className="text-white mt-1">{item.text}</h5>
        </div>
        </div>
        ))}      

        </div>
        </div>
        </div>
      </>
  );
}
export default CustomerType;