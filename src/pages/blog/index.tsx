import BlogCard from '@/components/blog-card'
import Layout from '@/components/layout'
import { HeadFC, PageProps, graphql } from 'gatsby'
import React from 'react'

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
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
                hero: string
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
            <div className='max-w-[1024px] m-auto mt-24'>
                <h1 className='text-5xl text-center my-4'>Blog</h1>
                <h2 className='text-3xl my-4'>Veja nossos posts</h2>
                <nav className='flex flex-col justify-start items-start gap-4'>
                    {queryData.allMdx.nodes.map((post) => {
                        return (
                            <BlogCard
                                key={post.id}
                                date={post.frontmatter.date}
                                excerpt={post.excerpt}
                                hero={post.frontmatter.hero}
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

export const Head: HeadFC = () => <title>Trazler - Blog</title>
