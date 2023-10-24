import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import NotFoundPage from './pages/404page';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
