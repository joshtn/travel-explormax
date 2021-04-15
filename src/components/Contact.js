import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <Container>
      <BorderBox>
        <Title>SAY HELLO</Title>
        <Info>hello@explormax.com</Info>
        <Info>123 456 123</Info>
      </BorderBox>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  background-color: #007bf1;
  text-align: center;
  justify-content: center;
  display: flex;
  width: 100%;
`

const BorderBox = styled.div`
  background-color: white;
  height: 470px;
  width: 900px;
  margin: 3rem 2rem;
`

const Title = styled.h1`
  font-size: 72px;
  padding-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`

const Info = styled.h3`
  font-size: 24px;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
