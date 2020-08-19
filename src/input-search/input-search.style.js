import styled from '@emotion/styled'
import searchIcon from './search.asset.png'
import searchIcon2x from './search@2x.asset.png'

export const ContainerElement = styled.div`
  display: flex;
`

export const InputSearchElement = styled.input`
  height: 40px;
  border: 0;
  border-radius: 4px;;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-sizing: border-box;
  padding: 0 10px;
  flex: 1;
  font-size: 18px;

  ::placeholder {
    color: #999;
  }
`

export const ButtonElement = styled.button`
  height: 40px;
  width: 40px;
  border: 0;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: url(${searchIcon}) no-repeat center #eee;
  background-size: 50%;

  @media
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
    background-image: url(${searchIcon2x});
  }
`
