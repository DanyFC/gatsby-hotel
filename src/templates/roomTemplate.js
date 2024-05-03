import { css } from '@emotion/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from './../components/layout'

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsRoom(filter: {slug: {eq: $slug}}) {
      nodes {
        title
        slug
        image {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
        content
      }
    }
  }
`
const RoomTemplate = ({ data }) => {
  const { title, content, image } = data.allDatoCmsRoom.nodes[0]
  const img = getImage(image)

  return (
    <Layout>
      <main css={css`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 2rem;
        width: 95%;
      `}>
        <h1 css={css`
          font-size: 50px;
          margin-top: 4rem;
          text-align: center;
        `}>{title}</h1>
        <p>{content}</p>
        <GatsbyImage image={img} alt={title}/>
      </main>
    </Layout>
  )
}

export default RoomTemplate