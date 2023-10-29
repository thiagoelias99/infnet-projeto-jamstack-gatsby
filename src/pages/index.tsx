import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/header'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className='bg-slate-400 w-screen h-screen m-auto'>
      <Header />
      Home page
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
