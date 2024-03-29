import { Order } from '../../types/Order'
import { formatCurrency } from '../../utils/formatCurrency'

import closeIcon from '../../../assets/images/close-icon.svg'

import { Overlay, ModalBody, OrderDetails, Actions } from './styles'

interface OrderModalProps {
  order: Order | null
  visible: boolean
  isLoading: boolean
  onClose(): void
  onCancelOrder(): Promise<void>
  onChangeOrderStatus(): Promise<void>
}

export function OrderModal({
  order,
  visible,
  isLoading,
  onClose,
  onCancelOrder,
  onChangeOrderStatus
}: OrderModalProps) {
  if (!visible || !order) return null

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + (product.price * quantity)
  }, 0)

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="ícone de X" />
          </button>
        </header>

        <div className='status-container'>
          <small>Status do Pedido</small>
          <div>
            <span>{order.status === 'AWAITING' && '⏰'}</span>
            <span>{order.status === 'IN_PRODUCTION' && '👩‍🍳'}</span>
            <span>{order.status === 'DONE' && '✅'}</span>

            <strong>{order.status === 'AWAITING' && 'Fila de espera'}</strong>
            <strong>{order.status === 'IN_PRODUCTION' && 'Em preparação'}</strong>
            <strong>{order.status === 'DONE' && 'Pronto'}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='56'
                  height='28.51'
                />

                <span className='quantity'>{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type="button"
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'AWAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <strong>
                {order.status === 'AWAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </strong>
            </button>
          )}

          <button
            type="button"
            className='secondary'
            disabled={isLoading}
            onClick={onCancelOrder}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>)
}
