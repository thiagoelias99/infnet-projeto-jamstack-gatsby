import { Link } from 'gatsby'
import React from 'react'

interface StyledLinkProps {
    text: React.ReactNode
    to: string
}

const StyledLink = ({ text, to }: StyledLinkProps) => {
    return (
        <Link to={to} className='text-white text-xl hover:text-slate-400 uppercase underline transition duration-500'>
            <p>{text}</p>
        </Link>
    )
}

export default function Links() {
    return (
        <nav className='flex flex-row gap-4 h-full justify-center items-center'>
            <StyledLink text='Home' to='/' />
            <StyledLink text='Blog' to='/blog' />
        </nav>
    )
}
