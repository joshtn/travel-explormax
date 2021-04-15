import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ImLocation } from "react-icons/im"
import Aos from "aos"
import "aos/dist/aos.css"

const Trips = ({ heading }) => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard
          key={index}
          data-aos="fade-down"
          data-aos-delay="80"
          data-aos-duration="1000"
        >
          <ProductImg
            alt={item.node.name}
            image={item.node.img.childImageSharp.gatsbyImageData}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <ALink
              href={`https://www.google.com/search?q=${item.node.name}`}
              target="_blank"
              rel="noopener noreferrer"
              primarg="true"
              roundarg="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </ALink>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const ALink = styled.a`
  background: ${({ primarg }) => (primarg ? "#F26A2E" : "#007BF1")};
  white-space: nowrap;
  padding: ${({ bigarg }) => (bigarg ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ bigarg }) => (bigarg ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ roundarg }) => (roundarg ? "50px" : "none")};

  &:hover {
    background: ${({ primarg }) => (primarg ? "#007BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`
