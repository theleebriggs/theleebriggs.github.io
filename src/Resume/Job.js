import React from 'react'
import {format, parse} from 'date-fns'

import './Job.css'

const Meta = ({
  name,
  position,
  startDate,
  endDate,
  contract = false,
  url
}) => {
  const end = endDate ? format(parse(endDate), 'MMM YYYY') : 'Present';
  const start = format(parse(startDate), 'MMM YYYY');

  return (
    <p className='Job-meta'>
      <a href={url} className='Job-link'>{name}</a> | {position}
      <span className="Job-meta__time">
        {start} - {end} {contract && `(contract)`}
      </span>
    </p>
  )
}

const Job = ({
  summary,
  ...props
}) => {
  return (
    <div className='Job'>
      <Meta {...props} />
      <div className='Job-description' dangerouslySetInnerHTML={{__html: summary}} />
    </div>
  )
}

export default Job
