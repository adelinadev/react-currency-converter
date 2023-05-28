import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navigation'>
      <NavLink to="/rate" className='link-primary font-weight-bold'>Currency Rate</NavLink>
    </div>
  )
}
