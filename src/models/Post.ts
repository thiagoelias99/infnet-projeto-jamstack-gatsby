import { GatsbyImage } from 'gatsby-plugin-image'

export interface IPost {
    title: string
    date: string
    description: string
    cover: any
    slug: string
}