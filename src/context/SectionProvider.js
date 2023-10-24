import React, { useContext } from 'react';
import SectionContext from './SectionContext';

const sectionData = [
    {
    	value: 99,
    	text: 'Success in getting happy customer'
    },
    {
    	value: 25,
    	text: 'Thousands of successful business'
    },
    {
    	value: 120,
    	text: 'Total clients who love HighTech'
    },
    {
    	value: 5,
    	text: 'Stars reviews given by satisfied clients'
    }
];

const SectionProvider = ({children}) => {
	return(
        <SectionContext.Provider value={sectionData}>
         {children}
        </SectionContext.Provider>
	);
}
export default SectionProvider