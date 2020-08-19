import React from 'react'
import { Header as HeaderElement, Container } from './header.style.js'
import { LogoElement } from '../logo/logo.style.js'
import { node } from 'prop-types'

/**
  * O Header é utilizado para exibir um conteúdo principal no início de uma página
  * Conteúdo este que deve prover fácil navegação ou localização para o usuário.
  */
export const Header = ({ children }) => (
  <HeaderElement>
    <Container>
      <a href='/'><LogoElement /></a>
      { children }
    </Container>
  </HeaderElement>
)

Header.propTypes = {
  /** A prop children define o conteúdo a exibir dentro do header */
  children: node,
}
