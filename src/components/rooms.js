import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import RoomCard from './roomCard'
import styled from '@emotion/styled'

const RoomsList = styled.ul`
  margin: 4rem auto 0 auto;
  max-width: 1200px;
  width: 95%;

  @media (min-width: 768px) {
    column-gap: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Rooms = () => {
  const data = useStaticQuery(graphql`
  query {
    allDatoCmsRoom {
      nodes {
        title
        id
        content
        slug
        image {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
  }
  `)

  const rooms = [...data.allDatoCmsRoom.nodes]

  return (
    <div css={css`
      margin: 6rem auto;
    `}>
      <h1 css={css`
        text-align: center;
      `}>Our Rooms</h1>
      <RoomsList>
        {rooms.map(room => <RoomCard key={room.id} {...room} />)}
      </RoomsList>
    </div>
  )
}

export default Rooms