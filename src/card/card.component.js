import React from 'react'
import { CardElement, CardItemElement } from './card.style.js'
import { string, node, oneOf } from 'prop-types'

/**
  * O Card é um componente para exibir conteúdo.
  * Ele contrasta com a cor de fundo, tendo grande visibilidade pelo usuário.
  */
export const Card = ({ label, children, as='div', ...props}) => (
  <CardElement aria-label={ label } { ...props }>
    { children }
  </CardElement>
)

/**
  * O Card.Item é utilizado para listar items dentro do Card,
  * caso este seja uma lista.
  */
Card.Item = CardItemElement

Card.propTypes = {
  /** Descreve o conteúdo para leitores de tela **/
  label: string,

  /** Define o conteúdo do card */
  children: node,

  /** Define o tipo de elemento a renderizar, provendo um valor semântico */
  as: oneOf(['ul', 'li', 'section', 'div']),
}

