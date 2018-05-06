import React from 'react'

import './Resume.css'
import resumeData from './resume.data'

import Header from './Header'
import Career from './Career'

const Resume = () => {
  const { basics, work } = resumeData

  return (
    <div className='Resume'>
      <Header {...basics} />
      <div className='Resume-career'>
        <Career jobs={work} />
      </div>
    </div>
  )
}

export default Resume
