import React from 'react'
import PropTypes from 'prop-types'

import SectionHeading from './common/SectionHeading'
import Job from './Job'

const Career = ({ jobs }) => {
  return (
    <div className='Career'>
      <SectionHeading heading='Career' primary />
      {
        jobs.map((j, i) => {
          return (
            <Job key={i} {...j} />
          )
        })
      }
    </div>
  )
}

Career.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default Career
