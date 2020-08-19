import React from 'react'
import { Breadcrumb }  from '../breadcrumb/breadcrumb.component.js'
import { ContainerElement as Container } from '../container/container.style.js'
import { Card } from '../card/card.component.js'
import { useParams } from 'react-router-dom'
import useFetch from 'use-http'
import { Image } from '../image/image.component.js'
import { SmallText, Title, Text } from '../text/text.style.js'
import { useCurrency } from  '../currency/currency.hook.js'
import { Header, Button } from './product.style.js'

export const Product = () => {
  const { id } = useParams()
  const { currency } = useCurrency()
  const { data: product } = useFetch(`//localhost:5000/products/${id}`, [])

  const toText = (text, index) => <Text key={ index } style={{ color: '#999' }}>{ text }</Text>

  return (
    <Container>
      { product &&
        <>
          <Breadcrumb label='Catégories' items={ product.categories } />

          <Card label='Detalles del producto' as='section'>
            <Header>
              <Image src={ product.picture } style={{ width: 680 }} />
              <div>
                <Title as='h4'>{ product.condition } - { product.sold_quantity } vendidos</Title>
                <Title>{ product.item.title }</Title>
                <Title as='h3'>{ currency(product.item.price) }</Title>
                <Button>Comprar</Button>
              </div>
            </Header>
            { product.description.split('\n\n').map(toText) }
          </Card>
        </>
      }
    </Container>
  )
}
