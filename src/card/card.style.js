import styled from '@emotion/styled'

export const CardElement = styled.div`
  border-radius: 4px;
  background: #fff;
  padding: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  font-family: sans-serif;
`

export const CardItemElement = styled.li`
  padding: 16px;
  min-height: 100px;
  list-style: none;
  display: flex;
  flex-direction: row;

  a {
    display: inherit;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    small {
      margin-top: 10px;
    }
  }

  img {
    margin-right: 16px;
    width: 180px;

    @media (max-width: 700px) {
      display: none;
    }
  }

  :not(:first-of-type) {
    border-top: 1px solid #eee;
  }
`
