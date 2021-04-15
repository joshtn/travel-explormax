import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Careers = () => {
  const data = useStaticQuery(graphql`
    query {
      tripsJson {
        id
      }
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["work-1", "work-2", "work-3"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <TextContainer>
        <Title>Together at EXPLORMAX</Title>
        <BreadText>
          To become great, you need a great team. Together we work hard, laugh,
          brainstorm, have hundreds of fun moments and give each other the best
          high-fives!
        </BreadText>
      </TextContainer>
      <GridContainer>
        <PictureOne>
          {data.allFile.edges.map(
            (image, key) =>
              key === 0 && (
                <Images
                  key={key}
                  image={image.node.childImageSharp.gatsbyImageData}
                />
              )
          )}
        </PictureOne>
        <PictureTwo>
          {data.allFile.edges.map(
            (image, key) =>
              key === 1 && (
                <Images
                  key={key}
                  image={image.node.childImageSharp.gatsbyImageData}
                />
              )
          )}
        </PictureTwo>
        <PictureThree>
          {data.allFile.edges.map(
            (image, key) =>
              key === 2 && (
                <Images
                  key={key}
                  image={image.node.childImageSharp.gatsbyImageData}
                />
              )
          )}
        </PictureThree>
      </GridContainer>
    </Container>
  )
}

export default Careers

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1230px) {
    align-items: unset;
  }
`

const TextContainer = styled.div`
  width: 900px;

  @media screen and (max-width: 1230px) {
    width: auto;
  }
`

const Title = styled.h2`
  margin-bottom: 3rem;
`

const BreadText = styled.h1`
  margin-top: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 700px 500px;
  grid-template-rows: 300px 300px;
  margin-top: 2rem;
  grid-gap: 10px;
  justify-content: center;

  @media screen and (max-width: 1230px) {
    grid-template-columns: 1fr;
  }
`

const PictureOne = styled.div``

const PictureTwo = styled.div``
const PictureThree = styled.div`
  grid-row: 1/3;
`

const Images = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`
