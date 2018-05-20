import React from 'react'
import cx from 'classnames'

import './Section.css'
import SectionHeading from './SectionHeading'

const Section = ({ children, className, heading }) => {
  const classes = cx({
    'Section': true,
    [className]: className
  })

  return (
    <section className={classes}>
      {heading && <SectionHeading primary>{heading}</SectionHeading>}
      {children}
    </section>
  )
}

export default Section
