import React from 'react'
import cx from 'classnames'

import './SectionHeading.css'

const SectionHeading = ({ as: As = 'h2', children, className, primary: isPrimary }) => {
  const classes = cx({
    'SectionHeading': true,
    'SectionHeading--primary': isPrimary,
    className
  })

  return (
    <As className={classes}>{children}</As>
  )
}

export default SectionHeading
