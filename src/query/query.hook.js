import { useState } from 'react'

export const useQuery = () => {
  const queryString = location.search.replace('?', '')
  const [ query, setQuery ]  = useState(Object.fromEntries(new URLSearchParams(queryString)))

  const updateQuery = query => {
    var searchParams = new URLSearchParams(window.location.search)
    for (let key in query) {
      const value = query[key]
      searchParams.set(key, value)
    }
    window.location.search = searchParams.toString()
  }

  return {
    query,
    updateQuery,
  }
}
