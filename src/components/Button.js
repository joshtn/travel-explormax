import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
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
