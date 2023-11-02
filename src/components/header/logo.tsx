import React from 'react'
import { Link } from 'gatsby'
import logo1 from '../../images/Email Address.svg'
import logo2 from '../../images/Shape.svg'

export default function Logo() {
  return (
    <Link to='/'>
      <div className='flex flex-row max-h-12'>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
      </div>
    </Link>
  )
}
