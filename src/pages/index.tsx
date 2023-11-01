import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "@/components/layout"
import Cover from "../images/home-cover.png"
import Card from '@/components/card'
import { IPost } from '@/models/Post'

import CardCover from '../images/card-cover-template.png'

export const query = graphql`
    query {
      allMdx(limit: 6) {
        nodes {
          frontmatter {
            title
            slug
            date(locale: "Pt", formatString: "MMMM D, YYYY")
            cover
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
        cover: string
      }
      id: string
      excerpt: string
    }[]
  }
}

interface IProps {
  data: IQuery
}


const IndexPage: React.FC<PageProps> = ({ data }) => {

  const queryData = data as IQuery

  const [posts, setPosts] = React.useState<IPost[]>([
    {
      cover: CardCover,
      date: '28 outubro 2023',
      description: 'Lorem ipsum dolor sit amet consectetur. Lacus est leo tortor feugiat fusce nulla vel. Viverra sagittis varius vivamus morbi etiam sodales. Blandit tortor lacus malesuada dignissim viverra a consectetur. Etiam lorem velit non viverra fermentum diam a. Tempor semper egestas volutpat massa dictum ultrices neque pellentesque. Diam sed bibendum venenatis eget ut non id. Lorem amet varius aliquam augue. Sagittis blandit eget a tortor. Eu vehicula tellus sed sed convallis eget egestas eget. In amet interdum volutpat ut pellentesque arcu sed sed et.',
      title: 'Título asdasdd asd sad  asdas'
    },
    {
      cover: CardCover,
      date: '28 outubro 2023',
      description: 'Lorem ipsum dolor sit amet consectetur. Lacus est leo tortor feugiat fusce nulla vel. Viverra sagittis varius vivamus morbi etiam sodales. Blandit tortor lacus malesuada dignissim viverra a consectetur. Etiam lorem velit non viverra fermentum diam a. Tempor semper egestas volutpat massa dictum ultrices neque pellentesque. Diam sed bibendum venenatis eget ut non id. Lorem amet varius aliquam augue. Sagittis blandit eget a tortor. Eu vehicula tellus sed sed convallis eget egestas eget. In amet interdum volutpat ut pellentesque arcu sed sed et.',
      title: 'Título asdasdd asd sad  asdas'
    },
    {
      cover: CardCover,
      date: '28 outubro 2023',
      description: 'Lorem ipsum dolor sit amet consectetur. Lacus est leo tortor feugiat fusce nulla vel. Viverra sagittis varius vivamus morbi etiam sodales. Blandit tortor lacus malesuada dignissim viverra a consectetur. Etiam lorem velit non viverra fermentum diam a. Tempor semper egestas volutpat massa dictum ultrices neque pellentesque. Diam sed bibendum venenatis eget ut non id. Lorem amet varius aliquam augue. Sagittis blandit eget a tortor. Eu vehicula tellus sed sed convallis eget egestas eget. In amet interdum volutpat ut pellentesque arcu sed sed et.',
      title: 'Título asdasdd asd sad  asdas'
    },
    {
      cover: CardCover,
      date: '28 outubro 2023',
      description: 'Lorem ipsum dolor sit amet consectetur. Lacus est leo tortor feugiat fusce nulla vel. Viverra sagittis varius vivamus morbi etiam sodales. Blandit tortor lacus malesuada dignissim viverra a consectetur. Etiam lorem velit non viverra fermentum diam a. Tempor semper egestas volutpat massa dictum ultrices neque pellentesque. Diam sed bibendum venenatis eget ut non id. Lorem amet varius aliquam augue. Sagittis blandit eget a tortor. Eu vehicula tellus sed sed convallis eget egestas eget. In amet interdum volutpat ut pellentesque arcu sed sed et.',
      title: 'Título asdasdd asd sad  asdas'
    },
    {
      cover: CardCover,
      date: '28 outubro 2023',
      description: 'Lorem ipsum dolor sit amet consectetur. Lacus est leo tortor feugiat fusce nulla vel. Viverra sagittis varius vivamus morbi etiam sodales. Blandit tortor lacus malesuada dignissim viverra a consectetur. Etiam lorem velit non viverra fermentum diam a. Tempor semper egestas volutpat massa dictum ultrices neque pellentesque. Diam sed bibendum venenatis eget ut non id. Lorem amet varius aliquam augue. Sagittis blandit eget a tortor. Eu vehicula tellus sed sed convallis eget egestas eget. In amet interdum volutpat ut pellentesque arcu sed sed et.',
      title: 'Título asdasdd asd sad  asdas'
    }
  ])

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
              cover={post.frontmatter.cover}
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