import React from 'react';
import ContactContext from './ContactContext';

const ContactProvider = ({children}) => {
	const contactData = {
		heading: 'Get In Touch',
		subHeading: 'Contact for any query',
		content: 'The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you are done.',
		address: '23 rank Str, NY',
		phoneNumber: '+012 3456 7890',
		emailAddress: 'info@example.com'
	}
    return(
       <>
         <ContactContext.Provider value={contactData}>
          {children}
         </ContactContext.Provider>
       </>
    );
}
export default ContactProvider;