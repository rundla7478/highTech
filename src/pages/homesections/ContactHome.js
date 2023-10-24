import React, {useState, useContext} from 'react';
import ContactContext from '../../context/ContactContext';

const ContactHome = () => {
	const contactData = useContext(ContactContext);

	const [formData, setFormData] = useState({
		name: '',
		emailAddress: '',
		subject: '',
		message: ''
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
       const {name, value} = e.target;
       setFormData({
       	 ...formData,
       	 [name]:value
       })
	}

	const validateForm = () => {
		const newErrors = {};

		if(!formData.name.trim()){
			newErrors.name = 'Name is required';
		}

		 if (!formData.emailAddress.trim()) {
		      newErrors.emailAddress = 'Email is required';
		    } else if (
		      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.emailAddress)
		    ) {
		      newErrors.emailAddress = 'Invalid email address';
		  }

		  if(!formData.subject.trim()){
		  	newErrors.subject = 'Subject is required';
		  }

		  if(!formData.message.trim()){
		  	newErrors.message = 'Message is required';
		  }

		   setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
	};


	const handleSubmit = (e) => {
		e.preventDefault();
        if(validateForm()){
		console.log('Form Data:', formData);
        }
	}
   return(
      <>
        <div className="container-fluid py-5 mb-5">
        <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
        <h5 className="text-primary">{contactData.heading}</h5>
        <h1 className="mb-3">{contactData.subHeading}</h1>
        <p className="mb-2">{contactData.content}</p>
        </div>
        <div className="contact-detail position-relative p-5">
        <div className="row g-5 mb-5 justify-content-center">
        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
        <div className="d-flex bg-light p-3 rounded">
        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
        <i className="fas fa-map-marker-alt text-white"></i>
        </div>
        <div className="ms-3">
        <h4 className="text-primary">Address</h4>
        <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">{contactData.address}</a>
        </div>
        </div>
        </div>
        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
        <div className="d-flex bg-light p-3 rounded">
        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
        <i className="fa fa-phone text-white"></i>
        </div>
        <div className="ms-3">
        <h4 className="text-primary">Call Us</h4>
        <a className="h5" href={`tel:${contactData.phoneNumber}`} target="_blank">{contactData.phoneNumber}</a>
        </div>
        </div>
        </div>
        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
        <div className="d-flex bg-light p-3 rounded">
        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
        <i className="fa fa-envelope text-white"></i>
        </div>
        <div className="ms-3">
        <h4 className="text-primary">Email Us</h4>
        <a className="h5" href={`mailto:${contactData.emailAddress}`} target="_blank">{contactData.emailAddress}</a>
        </div>
        </div>
        </div>
        </div>
        <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
        <div className="p-5 h-100 rounded contact-map">
        <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

        <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
        <div className="p-5 rounded contact-form">
         <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <input 
        type="text" 
        className="form-control border-0 py-3"
        name="name" 
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="mb-4">
        <input 
        type="email" 
        className="form-control border-0 py-3"
        name="emailAddress" 
        value={formData.emailAddress}
        onChange={handleChange}
        placeholder="Your Email"
        />
        {errors.emailAddress && <div className="text-danger">{errors.emailAddress}</div>}
        </div>

        <div className="mb-4">
        <input 
        type="text" 
        className="form-control border-0 py-3"
        name="subject" 
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        />
        {errors.subject && <div className="text-danger">{errors.subject}</div>}
        </div>

        <div className="mb-4">
        <textarea 
        className="w-100 
        form-control border-0 py-3" 
        rows="6" 
        cols="10"
        name="message" 
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        ></textarea>
        {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>

        <div className="text-start">
        <button className="btn bg-primary text-white py-3 px-5" type="submit">Send Message</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div> 
        </div>
      </>
   );
}
export default ContactHome;