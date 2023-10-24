import React from 'react';
import AboutContext from './AboutContext';

const AboutProvider = ({children}) => {
	const aboutData = {
		title: 'About Us',
		subtitle: "About HighTech Agency And It's Innovative IT Solutions",
		contentOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.',
        contentTwo: 'Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.',
		imageOne: '/img/about-1.jpg',
		imageTwo: '/img/about-2.jpg',
		pageLink: '#'
	}
   return(
      <>
        <AboutContext.Provider value={aboutData}>
         {children}
        </AboutContext.Provider>
      </>
   );
}
export default AboutProvider;