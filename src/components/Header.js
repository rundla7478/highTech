import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
   return(
      <>
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
      <div className="container">
      <div className="d-flex justify-content-between topbar">
      <div className="top-info">
      <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>23 Ranking Street, New York</small>
      <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>Email@Example.com</small>
      </div>
      <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
      <div className="top-link">
      <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
      <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
      <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
      <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
      </div>
      </div>
      </div>
      </div>

      <div className="container-fluid bg-primary">
      <div className="container">
      <nav className="navbar navbar-dark navbar-expand-lg py-0">
      <Link to="/" className="navbar-brand">
      <h1 className="text-white fw-bold d-block">High<span className="text-secondary">Tech</span> </h1>
      </Link>
      <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
      <div className="navbar-nav ms-auto mx-xl-auto p-0">
      <NavLink className="nav-item nav-link" exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
      <NavLink to="/service" className="nav-item nav-link" activeClassName="active">Services</NavLink>
      <NavLink to="/project" className="nav-item nav-link" activeClassName="active">Projects</NavLink>
      <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
      <div className="dropdown-menu rounded">
      <NavLink to="/blog" className="dropdown-item" activeClassName="active">Our Blog</NavLink>
      <NavLink to="/team" className="dropdown-item" activeClassName="active">Our Team</NavLink>
      <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">Testimonial</NavLink>
      </div>
      </div>
      <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
      </div>
      </div>
      <div className="d-none d-xl-flex flex-shirink-0">
      <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
      <a href="" className="position-relative animated tada infinite">
      <i className="fa fa-phone-alt text-white fa-2x"></i>
      <div className="position-absolute" style={{top: '-7px', left: '20px'}}>
      <span><i className="fa fa-comment-dots text-secondary"></i></span>
      </div>
      </a>
      </div>
      <div className="d-flex flex-column pe-4 border-end">
      <span className="text-white-50">Have any questions?</span>
      <span className="text-secondary">Call: + 0123 456 7890</span>
      </div>
      <div className="d-flex align-items-center justify-content-center ms-4 ">
      <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
      </div>
      </div>
      </nav>
      </div>
      </div>
      </>
   );
}
export default Header;