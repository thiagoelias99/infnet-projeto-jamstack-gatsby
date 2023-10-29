import React from 'react'

interface SignProps {
  title: string
  author: string
}

const Sign = ({ title, author }: SignProps) => {
  return (
    <div>
      <p className='text-white text-xl font-thin'>{title} <span className='font-bold uppercase'>{author}</span></p>
    </div>
  )
}

export default function SignContainer() {
  return (
    <div className='flex flex-col'>
      <Sign title='Designed by' author='XP Design' />
      <Sign title='Developed by' author='Thiago Elias' />
    </div>
  )
}
