import React from 'react'
import searchIcon from '../../images/material-symbols_search.svg'
import { Input } from '../ui/input'

export default function Search() {
  return (
    <div className='flex flex-row gap-2 h-full justify-center items-center'>
      <img src={searchIcon} alt="" className='h-9'/>
      <Input type='text' className='border-none text-black italic bg-white w-[220px]' />
    </div>
  )
}
