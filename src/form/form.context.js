import { createContext } from 'react'

export const FormContext = createContext({
  /** Dados dos campos nomeados do formulário */
  data: {},

  /** Permite mudar o valor de um campo do formulário */
  setData: () => {},

  /** Executa a validação de todos os campos */
  validate: () => {},

  /** Estado que informa se o formulário está habilitado para efetuar validações */
  validating: false,

  /** Permite alterar o estado validating */
  setValidating: () => {},

  /** Objeto contendo todas as validações do formulário*/
  validities: {},

  /** Método que modifica o objeto validities */
  setValidities: () => {},
});
