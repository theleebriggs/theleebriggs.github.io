import React from 'react'
import cx from 'classnames'

import SectionHeading from './SectionHeading'

const Section = ({ children, className, heading }) => {
  const classes = cx({
    'Section': true,
    className
  })

  return (
    <section className={classes}>
      {heading && <SectionHeading primary>{heading}</SectionHeading>}
      {children}
    </section>
  )
}

export default Section
