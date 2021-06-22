import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import setupTags, { TagsInter } from "../utils/setupTags"
const TagList = (props: { recipes: Array<TagsInter> }) => {
  const newTags = setupTags(props.recipes)

  return (
    <div className="tags-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
