import styled from '@emotion/styled'
import { CardElement } from '../card/card.style.js'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  div {
    padding-top: 32px;
  }

  h3 {
    font-size: 46px;
    margin: 32px 0;
  }

  h4 {
    text-transform: capitalize;
    margin: 0 0 16px;
  }
`

export const Button = styled.button`
  background: #3483fa;
  color: white;
  border-radius: 4px;
  border: 0;
  font-size: 24px;
  line-height: 48px;
  display: block;
  width: 100%;
  cursor: pointer;
`
