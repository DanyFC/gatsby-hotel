import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const TextImage = styled.div`
  background-image: linear-gradient(to top, rgba(34, 49, 63, .6), rgba(34, 49, 63, .8));
  color: #FFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p{
    font-size: 2rem;
    
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "banner.jpg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="div" fluid={image.sharp.fluid} backgroundColor='#b8b8b8' fadeIn='soft'>
      <TextImage>
        <h1>Welcome to our Hotel.</h1>
        <p>The best hotel for your vacation.</p>
      </TextImage>
    </ImageBackground>
  )
}

export default Hero