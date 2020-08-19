import React, { useState, useEffect, useRef } from 'react'
import { node, func } from 'prop-types'
import { FormContext as Context } from './form.context'
import { FormElement } from './form.style.js'

export const Form = ({ children, onSubmit, ...props }) => {
  const { Provider } = Context
  const [ data, setData ] = useState(props.data || {})
  const [ validating, setValidating ] = useState(false)
  const [ validities, setValidities ] = useState({})
  const form = useRef()

  useEffect(() => {
    setData({ ...data })
  }, [])

  const validate = () => {
    setValidating(true)

    const promise = new Promise((resolve, reject) => {
      const toValidity = item => item.hasOwnProperty('valid') ? item : Object.values(item).map(toValidity)
      const isInvalid = Object.values(validities)
        .flatMap(toValidity)
        .some(validity => !validity.valid)

      if (!isInvalid) {
        setValidating(false)
        resolve()
      } else {
        reject()
      }
    })

    return promise
  }

  const submit = event => {
    event.preventDefault()
    event.stopPropagation()
    setValidating(true)

    validate()

    const formIsValid = event.currentTarget.checkValidity()

    if (formIsValid && onSubmit) {
      onSubmit(data)
    }
  }

  const context = {
    data,
    setData,
    validate,
    validating,
    setValidating,
    validities,
    setValidities,
  }

  return (
    <Provider value={context}>
      <FormElement noValidate onSubmit={submit} ref={form}>
        {children}
      </FormElement>
    </Provider>
  )
}

Form.propTypes = {
  /** Define o conteúdo do formulário */
  children: node,

  /** Evento chamado quando o usuário submeter o formulário */
  onSubmit: func,
}
