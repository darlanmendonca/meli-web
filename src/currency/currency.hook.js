export function useCurrency() {
  const options = {
    style: 'currency',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  }

  const currency = ({ amount, currency = 'ARS' }) => amount.toLocaleString('es-AR', {
    ...options,
    currency,
  })

  return {
    currency,
  }
}
