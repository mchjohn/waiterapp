import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(4.5px);
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      display: flex;
      background: transparent;
    }
  };

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 2px;
      align-items: center;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          mask-border: 4px;
        }

        span {
          font-size: 14px;
          color: #666666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    border: 0;
    border-radius: 48px;
    background: transparent;
    color: #D73035;
    padding: 12px 24px;
    font-weight: bold;
    margin-top: 12px;
  }
`
