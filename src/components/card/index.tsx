import React from 'react'
import { Link } from 'gatsby'
import { IPost } from '@/models/Post'

export default function Card({cover, date, description, title, slug} : IPost) {
    return (
        <div className='h-[380px] md:h-[400px] lg:h-[440px] flex flex-col'>
            {/* <img src={cover} alt="placeholder" className='w-full h-[209px]' /> */}
            {cover}
            <h3 className='text-2xl lg:text-3xl mt-2'>{title}</h3>
            <p className='text-xs w-full text-right mt-2 text-slate-700 italic'>{date}</p>
            <p className='flex-1 text-sm h-32 w-full text-ellipsis overflow-hidden text-slate-800'>{description}</p>
            <Link to={`/blog/${slug}`} className='text-base font-bold underline mt-2'>Ver Post</Link>
        </div>
    )
}
