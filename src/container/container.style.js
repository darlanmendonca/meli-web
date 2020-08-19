import styled from '@emotion/styled'

/**
  * O Container possui um tamanho máximo na horizontal
  * a fim de restringir o conteúdo, evitando fique muito largo em
  * telas desktop com mais de 1000 pixels de largura.
  *
  * No mobile, ele possui largura de 100%.
  */
export const ContainerElement = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
`
