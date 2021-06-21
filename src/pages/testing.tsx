import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../example/gallery"
const Testing = (props: React.PropsWithChildren<any>) => {
  return (
    <Layout>
      <main className="page">
         <Gallery />
      </main>
     
    </Layout>
  )
}

export default Testing
