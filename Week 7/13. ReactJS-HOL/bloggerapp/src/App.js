import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="section">
        <CourseDetails courses={courses} />
      </div>

      <div className="divider" />

      <div className="section">
        <BookDetails books={books} />
      </div>

      <div className="divider" />

      <div className="section">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
