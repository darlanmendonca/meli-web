import styled from '@emotion/styled'

export const ListElement = styled.ol`
  padding: 0 0 16px;
  margin: 0;
  list-style: none;
  color: #666;
  overflow: auto;
  white-space: nowrap;
`

export const ItemElement = styled.li`
  display: inline-block;
  font-family: sans-serif;
  font-size: 14px;

  :not(:first-of-type) {
    margin-left: 10px;

    :before {
      content: '>';
      font-weight: normal;
      margin-right: 10px;
    }
  }

  :last-of-type {
    font-weight: bold;
  }
`
