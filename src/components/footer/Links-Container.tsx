import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface LinkProps {
  link: string
  icon: any
}

const CustomLink = ({ link, icon }: LinkProps) => {
  return (
    <li className='text-white'>
      <a href={link} target='blank'>
        {icon}
      </a>
    </li>
  )
}

export default function LinksContainer() {
  return (
    <nav className='w-full md:w-1/3 order-2 md:order-3'>
      <ul className='list-none flex flex-row gap-4 justify-center md:justify-end items-center'>
        <CustomLink
          link='https://github.com/thiagoelias99/infnet-projeto-jamstack-gatsby'
          icon={
            <StaticImage src={'../../images/icons/github.svg'}
              alt={'github icon'}
              className='fill-white stroke-white text-white h-[24px] w-[24px]'
            />}
        />
        <CustomLink
          link='https://www.linkedin.com/in/eng-thiagoelias/'
          icon={
            <StaticImage src={'../../images/icons/linkedin.svg'}
              alt={'github icon'}
              className='fill-white stroke-white text-white h-[24px] w-[24px]'
            />}
        />
        <CustomLink
          link='mailto:thiagoelias99@gmail.com'
          icon={
            <StaticImage src={'../../images/icons/mail.svg'}
              alt={'github icon'}
              className='fill-white stroke-white text-white h-[24px] w-[24px]'
            />}
        />
      </ul>
    </nav>
  )
}
