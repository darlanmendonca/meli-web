import { createContext } from 'react'

export const FormContext = createContext({
  data: {},
  setData: () => {},
  validate: () => {},
  validating: false,
  setValidating: () => {},
  validities: {},
  setValidities: () => {},
});
