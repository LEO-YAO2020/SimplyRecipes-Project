import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

const RecipeTemplate = props => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    serving,
    description: { description },
    image,
  } = props.data.contentfulRecipe
  const pathToImage = getImage(image)
  //const { tags, instructions, ingredients, tools } = content
  return (
    <main className="page">
      <div className="recipe-page">
        <h2>{title}</h2>
      </div>
    </main>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      serving
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default RecipeTemplate
