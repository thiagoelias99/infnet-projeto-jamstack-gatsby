import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/layout"
import Cover from "../images/home-cover.png"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <figure className='flex max-h-[900px] h-[900] relative'>
        <div className='w-full absolute top-[40%] text-center min-h-[900] h-[900] z-20'>
          <p className='text-5xl text-white uppercase'>inspiration for travel by real people</p>
        </div>
        <div className='absolute w-full h-full bg-black/25 z-10'></div>
        <img src={Cover} alt="" className='max-h-[900px] z-0 bg-cover w-full' />
      </figure>

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Trazler</title>
