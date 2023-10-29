import React from 'react'
import searchIcon from '../../images/material-symbols_search.svg'
import { Input } from '../ui/input'

export default function Search() {
  return (
    <div className='flex flex-row gap-2'>
      <img src={searchIcon} alt="" />
      <Input type='text' className='border-none text-white italic bg-black w-[340px]' />
    </div>
  )
}
