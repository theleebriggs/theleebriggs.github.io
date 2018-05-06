import React from 'react'
import cx from 'classnames'

import './SectionHeading.css'

const SectionHeading = ({ as: As = 'h2', className, heading, primary: isPrimary }) => {
  const classes = cx({
    'SectionHeading': true,
    'SectionHeading--primary': isPrimary,
    className
  })

  return (
    <As className={classes}>{heading}</As>
  )
}

export default SectionHeading
