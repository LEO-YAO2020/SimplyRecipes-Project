import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

interface recipeInter {
  id: number
  title: string
  image: any
  prepTime: number
  cookTime: number
}
const RecipesList = (props: React.PropsWithChildren<any>) => {
  return (
    <div className="recipes-list">
      {props.recipes.map((recipe: recipeInter) => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        return (
          <Link to={`/${title}`} key={id} className="recipe">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook:{cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
