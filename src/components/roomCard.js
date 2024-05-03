import { css } from '@emotion/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'

const Button = styled(Link)`
  background-color: rgba(44, 62, 80, .85);
  color: #FFF;
  display: block;
  font-weight: 700;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
`

const RoomCard = ({ title, id, content, image, slug }) => {
  const img = getImage(image)
  return (
    <li css={css`
      border: 1px solid #E1E1E1;
      margin: 2rem auto;
      padding: 2rem;
    `}>
      <GatsbyImage image={img} alt={title} />
      <div css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 57%;
        justify-content: space-between;
        margin-top: 1rem;
      `}>
        <h2 css={css`
          text-align: center;
        `}>{title}</h2>
        <p>{content}</p>

        <Button to={`/${slug}`}>See more</Button>
      </div>
    </li>
  )
}

export default RoomCard