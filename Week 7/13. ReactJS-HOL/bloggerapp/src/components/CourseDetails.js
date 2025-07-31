import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
