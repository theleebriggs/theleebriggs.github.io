import React from 'react'
import {format, parse} from 'date-fns'

import TagList from './common/TagList'

import './Job.css'

const Job = ({
  name,
  position,
  url,
  startDate,
  endDate,
  summary,
  highlights,
  tags
}) => {
  const [start, end] = [startDate, endDate].map((d) => format(parse(d), 'MMMM, YYYY'))
  return (
    <div className='Job'>
      <ul className='Job-meta'>
        <li><strong>Company:</strong> <a href={url} className='Job-link'>{name}</a></li>
        <li><strong>Position:</strong> {position}</li>
        <li><strong>From:</strong> {start}</li>
        <li><strong>To:</strong> {end}</li>
      </ul>
      <div className='Job-description'>
        {/* <h3 className='Job-subHead'>Responsibilities</h3> */}
        <p>
          {summary}
          {tags && <TagList items={tags} />}
        </p>
      </div>
    </div>
  )
}

export default Job
