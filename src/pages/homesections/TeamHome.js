import React, {useContext} from 'react';
import TeamContext from '../../context/TeamContext';

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamHome = () => {
	const options = {
		    items: 3, // Number of items to display
		    margin: 10, // Space between items
		    loop: true, // Infinite loop
		    autoplay: true, // Auto play the carousel
		    autoplayTimeout: 3000, // Time between slides in milliseconds
    };

   
    const teamData = useContext(TeamContext);

	return(
       <>
       <div className="container-fluid py-5 mb-5 team">
        <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
        <h5 className="text-primary">{teamData.teamHeading}</h5>
        <h1>{teamData.teamSubheading}</h1>
        </div>
   
        <OwlCarousel className="owl-carousel team-carousel wow fadeIn" {...options} data-wow-delay=".5s">
        {teamData.teams.map((team, index) => (
        <div className="rounded team-item" key={index}>
        <div className="team-content">
        <div className="team-img-icon">
        <div className="team-img rounded-circle">
        <img src={team.image} className="img-fluid w-100 rounded-circle" alt=""/>
        </div>
        <div className="team-name text-center py-3">
        <h4 className="">{team.name}</h4>
        <p className="m-0">{team.degination}</p>
        </div>
        <div className="team-icon d-flex justify-content-center pb-4">
        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href={team.facebookUrl}><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href={team.twitterUrl}><i className="fab fa-twitter"></i></a>
        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href={team.instagramUrl}><i className="fab fa-instagram"></i></a>
        <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href={team.linkedinUrl}><i className="fab fa-linkedin-in"></i></a>
        </div>
        </div>
        </div>
        </div>
        ))}

         </OwlCarousel>
        </div>
        </div>
       </>
	);
}
export default TeamHome;