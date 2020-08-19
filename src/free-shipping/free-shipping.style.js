import styled from '@emotion/styled'
import freeShipping from './free-shipping.asset.png'
import freeShipping2x from './free-shipping@2x.asset.png'

export const FreeShipping = styled.small`
  height: 18px;
  width: 18px;
  border: 0;
  border-radius: 50%;
  background: url(${freeShipping}) no-repeat center;
  background-size: 100%;
  display: inline-block;
  margin-left: 10px;
  transform: translateY(1px);

  @media
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
    background-image: url(${freeShipping2x});
  }
`
