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
    <nav className='w-full md:w-1/3 order-2 md:order-3'>
      <ul className='list-none flex flex-row gap-2 justify-center md:justify-end items-center'>
        <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
        <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
        <CustomLink icon={FacebookIcon} link='https://www.facebook.com/' />
      </ul>
    </nav>
  )
}
