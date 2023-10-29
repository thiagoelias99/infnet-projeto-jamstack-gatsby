import React from 'react'
import FacebookIcon from '../../images/icons/facebook.svg'

interface LinkProps {
  link: string
  icon: string
}

const CustomLink = ({ link, icon }: LinkProps) => {
  return (
    <li className='text-white'>
      <a href={link} target='blank'>
        <img src={icon} alt='Facebook' className='fill-white stroke-white text-white h-[24px] w-[24px]' />
      </a>
    </li>
  )
}

export default function LinksContainer() {
  return (
    <nav className='list-none flex flex-row gap-2 justify-center items-center'>
      <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
      <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
      <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
    </nav>
  )
}
