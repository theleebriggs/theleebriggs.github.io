import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'

const Title = ({ primary, secondary }) => {
  return (
    <div className='ResumeHeader-title'>
      <h1 className='Title-primary'>{primary}</h1>
      <h2 className='Title-primary'>{secondary}</h2>
    </div>
  )
}

const Contact = ({
  email,
  github,
  phone
}) => {
  const mailLink = `mailto:${email}`
  const githubLink = `https://github.com/${github}`;

  return (
    <div className='ResumeHeader-contact'>
      <ul className='ContactList'>
        <li class="print-only"><strong>Phone:</strong> {phone}</li>
        <li><strong>Email:</strong> <a href={mailLink}>{email}</a></li>
        <li><strong>Github:</strong> <a href={githubLink} target="_blank" rel="noopener noreferrer">@{github}</a></li>
      </ul>
    </div>
  )
}

const Summary = ({ content }) => {
  return (
    <div className='ResumeHeader-summary' dangerouslySetInnerHTML={{__html: content}} />
  )
}

const Header = ({
  name,
  label,
  email,
  phone,
  github,
  summary
}) => {
  return (
    <div className='ResumeHeader'>
      <Title primary={name} secondary={label} />
      <Summary content={summary} />
      <Contact email={email} phone={phone} github={github} />
    </div>
  )
}

Header.propType = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default Header
