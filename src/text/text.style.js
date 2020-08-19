import styled from '@emotion/styled'

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  margin: 0;
  line-height: 1.4em;

  :not(:first-of-type) {
    margin-top: 2em;
  }
`

export const Title = styled.h2`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 32px;
  line-height: 1em;
`

export const SmallText = styled.small`
  font-family: sans-serif;
  font-size: 12px;
  color: #999
`
