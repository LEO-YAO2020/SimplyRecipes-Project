import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query Firstquery{
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

const Fetchdata = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>{title}</h2>
      {/*  <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
    </div>
  )
}

export default Fetchdata
