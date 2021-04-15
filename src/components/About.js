import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <Container>
      <Title>About EXPLORMAX</Title>
      <BreadText>
        We have always loved traveling and want to make it accessible for
        everyone!
      </BreadText>
      <BreadText>
        Here on our site you can find all the best tips on exploring the globe.
      </BreadText>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 571px;
  padding: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 2rem;
`

const BreadText = styled.h1`
  margin-top: 2rem;
`
