import { useContext, useEffect } from 'react'
import { get, set, unset } from 'lodash';
import { FormContext } from './form.context'
import { usePrevious } from '../previous/previous.hook'
import useDeepCompareEffect from 'use-deep-compare-effect'

/**
  * O hook useForm disponibiliza o contexto do formulário
  */
export const useForm = () => {
  const context = useContext(FormContext)

  return context
}

/**
  * O hook useField provê acesso ao valor e validação de um campo,
  * de uma forma mais simples/direta do que acessar no contexto do formulário,
  * porém os dados continuam sendo armazenados diretamente no contexto do formulário.
  */
export const useField = (props, initialValue) => {
  const { name } = props
  const { data, setData, form, validating, validities, setValidities } = useForm()
  const value = get(data, name) ?? initialValue
  const previousValue = usePrevious(value)

  const setValue = (newValue) => {
    if (!name) return
    setData({ ...set(data, name, newValue) })
  }

  const updateValue = () => {
    if (JSON.stringify(get(data, name)) !== JSON.stringify(previousValue)) {
      setValue(get(data, name))
    }
  }

  const setInitialValue = () => {
    setValue(get(data, name) ?? initialValue)
  }

  const setValidity = () => {
    const textContent = html => (new DOMParser)
      .parseFromString(html, 'text/html')
      .documentElement
      .textContent

    const valueMissing = Boolean(props.required) && (
      Array.isArray(value)
        ? !value?.length
        : value === undefined || value === null || (typeof value === 'string' && !textContent(value).length)
    )
    const patternMismatch = !valueMissing && Boolean(props.pattern)
      && !(new RegExp(props.pattern)).test(value)
    const rangeOverflow = !valueMissing && Boolean(props.max)
      && typeof value === 'string'
        ? props.type === 'date'
          ? Date.parse(value) > Date.parse(props.max)
          : textContent(value).length > props.max
        : value > props.max
    const rangeUnderflow = !valueMissing && Boolean(props.min)
      && typeof value === 'string'
        ? props.type === 'date'
          ? Date.parse(value) < Date.parse(props.min)
          : textContent(value).length < props.min
        : value < props.min
    const tooLong = !valueMissing && Boolean(props.maxLength)
      && textContent(value).length > props.maxLength
    const tooShort = !valueMissing && Boolean(props.minLength)
      && textContent(value).length > props.minLength
    const stepMismatch = !valueMissing && Boolean(props.step)
      && (value % props.step) > 0

    const validity = {
      valueMissing,
      patternMismatch,
      rangeOverflow,
      rangeUnderflow,
      stepMismatch,
      tooLong,
      tooShort,
    }

    setValidities(validities => {
      return set(validities, name, {
        ...validity,
        valid: !Object.values(validity).some(Boolean),
      })
    })
  }

  useEffect(setInitialValue, [])
  useDeepCompareEffect(updateValue, [ data ])
  useEffect(setValidity, [ validating, value, props ])

  return {
    value,
    setValue,
    validity: get(validities, name),
  }
}
