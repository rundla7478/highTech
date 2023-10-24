import React from 'react';
import ServiceContext from './ServiceContext';

const ServiceProvider = ({children}) => {
	const serviceData = {
		serviceTitle: 'Our Services',
		serviceSubtitle: 'Services Built Specifically For Your Business',
		services: [
            {
            	icon: 'fa fa-code fa-7x mb-4 text-primary',
            	title: 'Web Design',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            },
            {
            	icon: 'fa fa-file-code fa-7x mb-4 text-primary',
            	title: 'Web Development',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            },
            {
            	icon: 'fa fa-external-link-alt fa-7x mb-4 text-primary',
            	title: 'UI/UX Design',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            },
            {
            	icon: 'fas fa-user-secret fa-7x mb-4 text-primary',
            	title: 'Web Cecurity',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            },
            {
            	icon: 'fa fa-envelope-open fa-7x mb-4 text-primary',
            	title: 'Digital Marketing',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            },
            {
            	icon: 'fas fa-laptop fa-7x mb-4 text-primary',
            	title: 'Programming',
            	content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.',
            	url: '#'
            }
		]
	}
    return(
       <>
         <ServiceContext.Provider value={serviceData}>
          {children}
         </ServiceContext.Provider>
       </>
    );
}
export default ServiceProvider;