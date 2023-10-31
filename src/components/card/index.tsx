import React from 'react'
import CardCover from '../../images/card-cover-template.png'
import { Link } from 'gatsby'
import { IPost } from '@/models/Post'

export default function Card({cover, date, description, title} : IPost) {
    return (
        <div className='h-[420px] flex flex-col'>
            <img src={cover} alt="placeholder" className='w-full h-[209px]' />
            <h3 className='text-4xl'>{title}</h3>
            <p className='text-xs w-full'>{date}</p>
            <p className='flex-1 text-sm h-32 w-full text-ellipsis overflow-hidden'>{description}</p>
            <Link to='/' className='text-base font-bold underline mt-2'>Ver Post</Link>
        </div>
    )
}
