import React from 'react'
import { Link } from 'gatsby'
// import logo1 from '../../images/Email Address.svg'
// import logo2 from '../../images/Shape.svg'
import { StaticImage } from 'gatsby-plugin-image'

export default function Logo() {
  return (
    <Link to='/'>
      <div className='flex flex-row max-h-12'>
        {/* <img src={logo1} alt="" /> */}
        <StaticImage
          src='../../images/Email Address.svg'
          alt='logo'
          placeholder="none"
          objectFit='contain'
        />
        {/* <img src={logo2} alt="" /> */}
        <StaticImage
          src='../../images/Shape.svg'
          alt='logo'
          placeholder="none"
          objectFit='contain'
        />
      </div>
    </Link>
  )
}
