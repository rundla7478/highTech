import React from 'react';
import TeamContext from './TeamContext';

const TeamProvider = ({children}) => {

    const teamData = {
    	teamHeading: 'Our Team',
    	teamSubheading: 'Meet our expert Team',
    	teams: [
           {
           	 name: 'Full Name',
           	 degination: 'Designation',
           	 image: '/img/team-1.jpg',
           	 facebookUrl: '#',
           	 twitterUrl: '#',
           	 instagramUrl: '#',
           	 linkedinUrl: '#'
           },
           {
           	 name: 'Full Name',
           	 degination: 'Designation',
           	 image: '/img/team-2.jpg',
           	 facebookUrl: '#',
           	 twitterUrl: '#',
           	 instagramUrl: '#',
           	 linkedinUrl: '#'
           },
           {
           	 name: 'Full Name',
           	 degination: 'Designation',
           	 image: '/img/team-3.jpg',
           	 facebookUrl: '#',
           	 twitterUrl: '#',
           	 instagramUrl: '#',
           	 linkedinUrl: '#'
           },
           {
           	 name: 'Full Name',
           	 degination: 'Designation',
           	 image: '/img/team-4.jpg',
           	 facebookUrl: '#',
           	 twitterUrl: '#',
           	 instagramUrl: '#',
           	 linkedinUrl: '#'
           }
    	]
    }


    return(
       <>
         <TeamContext.Provider value={teamData}>
           {children}
         </TeamContext.Provider>
       </>
    );
}
export default TeamProvider;