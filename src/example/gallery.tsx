import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
         childImageSharp{
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED

            width: 200
            height:200
          )
        }
      }
    }
  }
`
const Wrapper = styled.section``
const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((item: any, index: number) => {
        const { name } = item
        return (
          <article key={index}>
            <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt='img'/>
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Gallery
