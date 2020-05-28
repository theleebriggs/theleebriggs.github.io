import React from 'react'
import {format, parse} from 'date-fns'

import './Job.css'

const Meta = ({
  name,
  position,
  startDate,
  url
}) => {
  const [start] = [startDate].map((d) => format(parse(d), 'MMM, YYYY'))
  return (
    <p className='Job-meta'>
      <a href={url} className='Job-link'>{name}</a> / {position} / {start}
    </p>
  )
}

const Job = ({
  name,
  position,
  url,
  startDate,
  endDate,
  summary,
  tags
}) => {
  return (
    <div className='Job'>
      <Meta endDate={endDate} name={name} position={position} startDate={startDate} url={url} />
      <div className='Job-description' dangerouslySetInnerHTML={{__html: summary}} />
    </div>
  )
}

export default Job
