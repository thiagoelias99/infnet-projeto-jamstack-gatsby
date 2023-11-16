import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Seo from '@/components/seo'
import Layout from '@/components/layout'



const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center mt-32 h-full flex-1'>
        <h1 className='text-4xl md:text-6xl text-center'>404</h1>
        <p className='text-2xl md:text-4xl text-center'>Página não encontrada</p>
        <Link to='/' className='text-2xl md:text-4xl text-center mt-4'>Voltar para a página inicial</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <Seo title='Trazler - 404' description='Página não encontrada' />
