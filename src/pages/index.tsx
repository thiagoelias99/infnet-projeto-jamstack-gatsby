import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "@/components/layout"
import Cover from "../images/home-cover.png"
import Card from '@/components/card'

export const query = graphql`
    query {
      allMdx(limit: 6, sort: {frontmatter: {date: DESC}}) {
        nodes {
          frontmatter {
            title
            slug
            date(locale: "Pt", formatString: "MMMM D, YYYY")
            hero
          }
          id
          excerpt
        }
      }
    }
`

interface IQuery {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        slug: string
        date: string
        hero: string
      }
      id: string
      excerpt: string
    }[]
  }
}

const IndexPage: React.FC<PageProps> = ({ data }) => {

  const queryData = data as IQuery

  return (
    <Layout>
      <figure className='flex max-h-[900px] h-[900] relative'>
        <div className='w-full absolute top-[40%] text-center min-h-[900] h-[900] z-20'>
          <p className='text-5xl text-white uppercase'>inspirações para viajar</p>
        </div>
        <div className='absolute w-full h-full bg-black/25 z-10'></div>
        <img src={Cover} alt="" className='max-h-[900px] z-0 bg-cover w-full' />
      </figure>

      <section className='p-4 max-w-[1024px] m-auto grid grid-cols-3 gap-4'>
        <h2 className='col-span-3 text-5xl text-center my-4'>Últimos Posts</h2>

        {queryData.allMdx.nodes.map((post) => {
          return (
            <Card key={post.id}
              title={post.frontmatter.title}
              cover={post.frontmatter.hero}
              date={post.frontmatter.date}
              description={post.excerpt.replace('Introdução ', '')}
              slug={post.frontmatter.slug}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Trazler</title>