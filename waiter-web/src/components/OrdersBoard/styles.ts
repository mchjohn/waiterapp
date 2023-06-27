import styled from 'styled-components'

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    padding: 8px;
    font-size: 14px;

    gap: 4px;
    display: flex;
    flex: 1;
    align-items: center;
  }
`

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  width: 100%;

  button {
    border: 1px solid rgba(204, 204, 204, 0.4);
    background: #fff;
    border-radius: 16px;

    width: 100%;
    height: 128px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      color: #666666;
      font-size: 14px;
    }

    & + button {
      margin-top: 24px;
    }
  }
`
