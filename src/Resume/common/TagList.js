import React from 'react'
import cx from 'classnames'

import './TagList.css'

const Tag = ({ children }) => <span className='Tag'>{children}</span>

const TagList = ({ items }) => {
  const classes = cx({
    'TagList': true
  })

  return (
    <span className={classes}>
      { items &&
        items.map(item => {
          return (
            <Tag>{item}</Tag>
          )
        })
      }
    </span>
  )
}

export default TagList
