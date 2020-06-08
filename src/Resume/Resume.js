import React from 'react'
import {Helmet} from 'react-helmet'

import './Resume.css'
import resumeData from './resume.data'

import Header from './Header'
import Career from './Career'
import Skills from './Skills'
import Education from './Education'

const Resume = () => {
  const { basics, work, skills, education } = resumeData

  return (
    <div className='Resume'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lee Briggs | Resume</title>
        <meta name="description"
        value="Front end developer based in Melbourne, previously at Aesop and in London at Government Digital Service." />
      </Helmet>
      <div className='Resume-header'>
        <Header {...basics} />
      </div>
      <div className='Resume-career'>
        <Career jobs={work} />
      </div>
      <div className='Resume-extra'>
        <Skills {...skills} />
        <Education education={education} />
      </div>
    </div>
  )
}

export default Resume
