import React from 'react'
import PropTypes from 'prop-types'

import Section from './common/Section'

import Job from './Job'

const Career = ({ jobs }) => {
  return (
    <Section className='Career' heading='Career'>
      {
        jobs.map((j, i) => {
          return (
            <Job key={i} {...j} />
          )
        })
      }
    </Section>
  )
}

Career.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default Career
