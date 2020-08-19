import React from 'react'
import { ImageElement } from '../image/image.style.js'
import { string, number } from 'prop-types'

/**
  * O componente Image renderiza uma imagem.
  * Use o label sempre que possível para tornar a imagem acessível em leitores de tela.
  */
export const Image = ({ label, src, width, ...props }) => (
  <ImageElement
    aria-label={ label }
    src={ src }
    width={ width }
    { ...props }
  />
)

Image.propTypes = {
  /** Descreve de forma acessível em leitores de tela, a imagem */
  label: string,

  /** Define o caminho para a imagem */
  src: string.isRequired,

  /** Define o caminho para a imagem */
  width: number,
}
