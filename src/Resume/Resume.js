import React from 'react'

import './Resume.css'
import resumeData from './resume.data'

import Header from './Header'
import Career from './Career'
import Skills from './Skills'
import Education from './Education'
import Interests from './Interests'

const Resume = () => {
  const { basics, interests, work, skills, education } = resumeData

  return (
    <div className='Resume'>
      <div className='Resume-header'>
        <Header {...basics} />
      </div>
      <div className='Resume-career'>
        <Career jobs={work} />
      </div>
      <div className='Resume-extra'>
        <Skills {...skills} />
        <Education education={education} />
        <Interests interests={interests} />
      </div>
    </div>
  )
}

export default Resume
