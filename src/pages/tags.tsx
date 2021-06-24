import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"
import SEO from '../components/SEO'
import slugify from "slugify"

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = props => {
  const newTags = setupTags(props.data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title='tags' description=''/>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">

                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
