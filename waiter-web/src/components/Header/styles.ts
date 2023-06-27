import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
  background: #D73035;
`

export const Content = styled.header`
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 32px;
  }

  h2 {
    margin-top: 6px;

    color: #fff;
    opacity: 0.9;
    font-size: 16px;
    font-weight: 400;
  }
`
