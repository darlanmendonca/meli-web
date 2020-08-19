import styled from '@emotion/styled'
import { ContainerElement } from '../container/container.style.js'
import { LogoElement } from '../logo/logo.style.js'

export const Header = styled.header`
  height: 55px;
  background-color: #ffe600;
  margin-bottom: 16px;
`

export const Container = styled(ContainerElement)`
  display: flex;
  align-items: center;
  height: 100%;

  a {
    display: inherit;
    margin-right: 10px;
  }
`
