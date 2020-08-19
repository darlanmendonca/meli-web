import React from 'react'
import { ListElement, ItemElement } from './breadcrumb.style.js'
import { string, arrayOf } from 'prop-types'

/**
  * O Breadcrum exibe uma lista de itens ordenada, útil para informar ao usuário
  * o caminho que foi seguido, como categorias e subcategorias.
  */
export const Breadcrumb = ({ label, items = [] }) => {
  const toItem = (item, index) => (
    <ItemElement key={ index }>{ item }</ItemElement>
  )

  return (
    <ListElement aria-label={ label }>
      { items.map(toItem) }
    </ListElement>
  )
}

Breadcrumb.propTypes = {
  /** Descreve o conteúdo presente na lista, para uso em leitores de tela */
  label: string,

  /** Define os itens a exibir */
  items: arrayOf(string),
}
