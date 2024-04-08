import React from 'react'
import CourseModule from './CourseModule'

const CourseLayout = ({modules}) => {
  return (
    <div>
      {modules.map((module, index) => (
        <CourseModule module={module} key={index} showcontent={true} />
      ))}
    </div>
  )
}

export default CourseLayout
