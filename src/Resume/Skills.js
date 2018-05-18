import React from 'react'
// import PropTypes from 'prop-types'

import Section from './common/Section'
import TagList from './common/TagList'

const Skills = ({ description, values }) => {
  return (
    <Section className='Skills' heading='Skills'>
      <p>{description}</p>
      {values && <TagList items={values} />}
    </Section>
  )
}

export default Skills
