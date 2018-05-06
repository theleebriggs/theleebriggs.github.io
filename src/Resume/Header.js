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
  phone
}) => {
  const mailLink = `mailto:${email}`

  return (
    <div className='ResumeHeader-contact'>
      <ul className='ContactList'>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Email:</strong> <a href={mailLink}>{email}</a></li>
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
  summary
}) => {
  return (
    <div className='ResumeHeader'>
      <Title primary={name} secondary={label} />
      <Summary content={summary} />
      <Contact email={email} phone={phone} />
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
