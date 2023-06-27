import { useState } from 'react';

import { Order } from '../../types/Order';

import { OrderModal } from '../OrderModal';

import { Board, OrdersContainer } from './styles'

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(prev => !prev)

    setSelectedOrder(order)
  }

  function handleCloseOrderModal() {
    setIsModalVisible(prev => !prev)

    setSelectedOrder(null)
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseOrderModal} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} type="button" onClick={() => handleOpenOrderModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
