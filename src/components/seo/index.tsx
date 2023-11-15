import React from 'react'
import favicon from '../../images/favicon.ico'

interface SeoProps {
    title?: string
    description?: string
}

const Seo = ({title, description} : SeoProps) => {
  return (
    <>
    <html lang="pt-BR" />
    <title>{title || "Trazler"}</title>
    <meta name="description" content={description || "Trazler Home Page"} />
    <meta name="keywords" content="Trazler, Blog, Travel, Viagem, Turismo, Dicas, Destinos, Lugares" />
    <meta name="author" content="Thiago Elias" />
    <link rel="icon" href={favicon} />
  </>
  )
}

export default Seo