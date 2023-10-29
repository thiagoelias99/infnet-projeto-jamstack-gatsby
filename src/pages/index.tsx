import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from '../components/header'
import Footer from '@/components/footer'
import Layout from "@/components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="bg-red-500 min-h-[880px] overflow-hidden">
        <h1>Blog de Viagens</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
