import { Link } from 'gatsby'
import React from 'react'

interface IBlogCard {
    title: string
    hero: string
    slug: string
    excerpt: string
    date: string
}

const BlogCard = ({ title, hero, date, excerpt, slug }: IBlogCard) => {
    return (
        <Link to={`/blog/${slug}`}>
            <div className='flex flex-row justify-center items-center gap-4 h-32 p-2 hover:bg-slate-100'>
                <img src={hero} alt="" className='h-full w-36 rounded-md' />
                <div className='flex flex-col justify-start items-start h-full'>
                    <p className='text-sm text-slate-700 italic'>{date}</p>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <p className='mt-2 flex-1'>{excerpt}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard