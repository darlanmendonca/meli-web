import React, { useState } from 'react'
import { render } from 'react-dom'
import { Header }  from './header/header.component.js'
import { InputSearch }  from './input-search/input-search.component.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Products } from './products/products.page.js'
import { Product } from './product/product.page.js'
import { Form } from './form/form.component.js'
import { useQuery } from './query/query.hook.js'

const App = () => {
  const { query, updateQuery } = useQuery()

  const search = ({ query }) => updateQuery({ q: query })

  return (
    <BrowserRouter>
      <Header>
        <Form onSubmit={ search }>
          <InputSearch
            placeholder='Nunca dejes de buscar'
            name='query'
            value={ query.q }
          />
        </Form>
      </Header>

      <Switch>
        <Route path='/' exact component={ Products } />
        <Route path='/items' exact component={ Products } />
        <Route path='/items/:id' exact component={ Product } />
      </Switch>
    </BrowserRouter>
  )
}

render(<App />, window.root)
