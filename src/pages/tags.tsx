import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

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
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">

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
