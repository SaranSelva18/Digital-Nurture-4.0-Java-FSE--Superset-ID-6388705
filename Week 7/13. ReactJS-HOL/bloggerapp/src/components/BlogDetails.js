import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div>
      <h1>Blog Details</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong><h3>{blog.title}</h3></strong> {/* Bold title */}
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
