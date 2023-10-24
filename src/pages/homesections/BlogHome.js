import React, {useContext} from 'react';
import BlogContext from '../../context/BlogContext';

const BlogHome = () => {
	const blogData = useContext(BlogContext);
   return(
   	   <>
          <div className="container-fluid blog py-5 mb-5">
        <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
        <h5 className="text-primary">{blogData.blogTitle}</h5>
        <h1>{blogData.blogSubtitle}</h1>
        </div>
        <div className="row g-5 justify-content-center">
        
        {blogData.blogs.map((blog, index) => (
        <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay={`.${index + 3}s`} key={index}>
        <div className="blog-item position-relative bg-light rounded">
        <img src={blog.image} className="img-fluid w-100 rounded-top" alt=""/>
        <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>{blog.title}</span>
        <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{marginTop: '-75px'}}>
        <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
        <a href="" className="btn text-white">Read More</a>
        </div>
        <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
        <div className="blog-icon-1">
        <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
        </div>
        <div className="blog-icon-2">
        <a href="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></a>
        <a href="" className="btn me-1"><i className="fab fa-twitter text-white"></i></a>
        <a href="" className="btn me-1"><i className="fab fa-instagram text-white"></i></a>
        </div>
        </div>
        </div>
        <div className="blog-content text-center position-relative px-3" style={{marginTop: '-25px'}}>
        <img src={blog.authorImage} className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
        <h5 className="">By {blog.authorName}</h5>
        <span className="text-secondary">{blog.blogDate}</span>
        <p className="py-2">{blog.content}</p>
        </div>
        <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
        <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>{blog.totalShare} Share</small></a>
        <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>{blog.totalComments} Comments</small></a>
        </div>
        </div>
        </div>

         ))}
        </div>
        </div>
        </div>
   	   </>
   );
}
export default BlogHome;