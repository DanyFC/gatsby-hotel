import { css } from "@emotion/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import * as React from 'react'
import styled from "@emotion/styled"

const Description = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }

  p{
    line-height: 1.6;
  }
`

const PageDescription = ({ page = 'home' }) => {
  const data = useStaticQuery(graphql`
  query {
    allDatoCmsPage {
      nodes {
        title
        content
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
  `)

  const currentPage = data.allDatoCmsPage.nodes.filter((item) => item.title.toLowerCase() === page)
  if (!currentPage.length) return <p css={css`
    font-size: 1.3rem;
    text-align: center;
  `}>This page does not exist.</p>

  const { title, content, image } = currentPage[0]
  const img = getImage(image)

  return (
    <>
      <h2 css={css`
        text-align: center;
        font-size: 4rem;
        margin-top: 4rem;
      `}>{title}</h2>

      <Description>
        <p>{content}</p>
        <GatsbyImage image={img} alt={title} />
      </Description>
    </>
  )
}

export default PageDescription