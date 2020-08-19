import React from 'react'
import { ContainerElement, InputSearchElement, ButtonElement } from '../input-search/input-search.style.js'
import { useField } from '../form/form.hook.js'
import { string } from 'prop-types'

/**
  * O InputSearch provê um campo de busca facilmente identificável pelo usuário.
  */
export const InputSearch = (props) => {
  const { value, setValue } = useField(props, props.value || '')

  const change = ({ target }) => setValue(target.value)

  return (
    <ContainerElement>
      <InputSearchElement value={ value } onChange={ change } />
      <ButtonElement type='submit' />
    </ContainerElement>
  )
}

InputSearch.propTypes = {
  /** Descreve ao usuário o que digitar no campo */
  placeholder: string,
}
