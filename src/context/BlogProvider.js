import React from 'react';
import BlogContext from './BlogContext';

const BlogProvider = ({children}) => {
	const blogData = {
		blogTitle: 'Our Blog',
		blogSubtitle: 'Latest Blog & News',
		blogs: [
            {
              title: 'Web Design',
              image: '/img/blog-1.jpg',
              authorImage: '/img/admin.jpg',
              authorName: 'Daniel Martin',
              blogDate: '23 April 2023',
              totalShare: '5324',
              totalComments: '5',
              content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet'
            },
            {
              title: 'Development',
              image: '/img/blog-2.jpg',
              authorImage: '/img/admin.jpg',
              authorName: 'Daniel Martin',
              blogDate: '23 April 2023',
              totalShare: '5324',
              totalComments: '5',
              content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet'
            },
            {
              title: 'Mobile App',
              image: '/img/blog-3.jpg',
              authorImage: '/img/admin.jpg',
              authorName: 'Daniel Martin',
              blogDate: '23 April 2023',
              totalShare: '5324',
              totalComments: '5',
              content: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet'
            }
		]
	}
   return(
     <>
      <BlogContext.Provider value={blogData}>
       {children}
      </BlogContext.Provider>
     </>
   );
}
export default BlogProvider;