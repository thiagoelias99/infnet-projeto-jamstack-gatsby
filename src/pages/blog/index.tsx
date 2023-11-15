import BlogCard from '@/components/blog-card'
import Layout from '@/components/layout'
import Seo from '@/components/seo'
import { HeadFC, PageProps, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
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

const Blog: React.FC<PageProps> = ({ data }) => {

    const queryData = data as IQuery

    return (
        <Layout>
            <div className='max-w-[1024px] m-auto mt-36 md:mt-24'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-center my-4'>Blog</h1>
                <h2 className='text-xl md:text-2xl lg:text-3xl p-4'>Veja nossos posts</h2>
                <nav className='flex flex-col justify-start items-start gap-4'>
                    {queryData.allMdx.nodes.map((post) => {
                        return (
                            <BlogCard
                                key={post.id}
                                date={post.frontmatter.date}
                                excerpt={post.excerpt}
                                hero={<GatsbyImage image={post.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt="" className='h-full w-36 rounded-md' />}
                                slug={post.frontmatter.slug}
                                title={post.frontmatter.title}
                            />
                        )
                    })
                    }
                </nav>
            </div>
        </Layout>
    )
}

export default Blog

export const Head: HeadFC = () => <Seo title='Blog' description='Blog da Trazler' />
