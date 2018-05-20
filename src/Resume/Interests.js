import React from 'react'

import Section from './common/Section'

const Interests = ({ interests }) => {
  return (
    <Section className='Interests' heading='Interests'>
      <div dangerouslySetInnerHTML={{__html: interests}} />
    </Section>
  )
}

export default Interests
