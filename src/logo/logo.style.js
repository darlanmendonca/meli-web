import styled from '@emotion/styled'
import logo from './logo_ml.asset.png'
import logo2x from './logo_ml@2x.asset.png'

export const LogoElement = styled.div`
  width: 42px;
  height: 40px;
  background: blue;
  display: inline-block;
  border-radius: 4px;
  background: url(${logo}) no-repeat center;
  background-size: 100%;

  @media
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
    background-image: url(${logo2x});
  }
`
