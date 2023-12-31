import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "@/components/layout"
import Card from '@/components/card'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Seo from "@/components/seo"


export const query = graphql`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}, limit: 6) {
        nodes {
          frontmatter {
            title
            slug
            date(locale: "Pt", formatString: "MMMM D, YYYY")
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
          excerpt
        }
        totalCount
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
        hero_image: {
          childImageSharp: {
            gatsbyImageData: any
          }
        }
      }
      id: string
      excerpt: string
    }[]
    totalCount: number
  }
}

const IndexPage: React.FC<PageProps> = ({ data }) => {

  const queryData = data as IQuery

  return (
    <Layout>
      <figure className='flex max-h-[900px] relative mt-32 md:mt-24'>
        <div className='w-full absolute top-[40%] text-center z-20'>
          <p className='text-2xl md:text-5xl text-white uppercase'>inspirações para viajar</p>
        </div>
        <div className='absolute w-full h-full bg-black/25 z-10'></div>
        <StaticImage
          src='../images/home-cover.png'
          alt='mountains'
          className='max-h-[900px] z-0 bg-cover w-full'
          placeholder="blurred"
        />
      </figure>

      <section className='p-4 max-w-[1024px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-y-10'>
        <h2 className='col-span-1 md:col-span-2 lg:col-span-3 text-3xl md:text-4xl lg:text-5xl text-center mt-4'>Últimos Posts</h2>

        {queryData.allMdx.nodes.map((post) => {
          return (
            <Card key={post.id}
              title={post.frontmatter.title}
              cover={<GatsbyImage image={post.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt="placeholder" className='w-full h-[209px]' objectFit='fill' />}
              date={post.frontmatter.date}
              description={post.excerpt.replace('Introdução ', '')}
              slug={post.frontmatter.slug}
            />
          )
        })}
      </section>

      <form method="post" name="subscriptions" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="subscriptions" />
        <input type="hidden" name="firstName" />
        <input type="hidden" name="lastName" />
        <input type="hidden" name="email" />
        <input type="hidden" name="date" />
        <input type="hidden" name="newPost" />
        <input type="hidden" name="weeklyResume" />
        <input type="hidden" name="monthlyResume" />
      </form>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <Seo title="Trazler" description="Trazler Home Page" />
  )
}