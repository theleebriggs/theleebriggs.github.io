import React from 'react'
// import PropTypes from 'prop-types'

import Section from './common/Section'

const Education = ({ education }) => {
  return (
    <Section className='Education' heading='Education'>
      {
        education.map(({studyType, area, institution}, i) => {
          return <p key={i}><strong>{studyType}</strong>, {area}, {institution}</p>
        })
      }
    </Section>
  )
}

export default Education
