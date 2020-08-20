import React, { useEffect } from 'react'
import { Breadcrumb }  from '../breadcrumb/breadcrumb.component.js'
import { ContainerElement as Container } from '../container/container.style.js'
import { Card } from '../card/card.component.js'
import { Image } from '../image/image.component.js'
import { Text, Title, SmallText } from '../text/text.style.js'
import { useQuery } from '../query/query.hook.js'
import useFetch from 'use-http'
import { useCurrency } from '../currency/currency.hook.js'
import { FreeShipping } from '../free-shipping/free-shipping.style.js'

export const Products = () => {
  const { query } = useQuery()
  const { loading, data: products } = useFetch(`//localhost:5000/products?q=${query.q || ''}`, [])
  const { currency } = useCurrency()

  const toCardItem = item => (
    <Card.Item key={ item.id }>
      <a href={`/items/${item.id}`}>
        <Image
          src={ item.picture }
        />
        <div style={{ flex: 1 }}>
          <Title>
            { currency(item.price) }
            { item.free_shipping && <FreeShipping aria-label='Entrega gratis' /> }
          </Title>
          <Text> { item.title }</Text>
          <Text> { item.description }</Text>
        </div>
        <SmallText>{ item.origin }</SmallText>
      </a>
    </Card.Item>
  )

  return (
    <Container>
      { Boolean(products?.length) &&
        <>
          <Breadcrumb label='Catégories' items={ products[0].categories } />

          <Card label='Productos Encontrados' as='ul'>
            { products.map(toCardItem) }
          </Card>
        </>
      }
    </Container>
  )
}
