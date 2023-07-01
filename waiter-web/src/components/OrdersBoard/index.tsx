import { useState } from 'react';
import { toast } from 'react-toastify';

import { Order } from '../../types/Order';

import { OrderModal } from '../OrderModal';

import { Board, OrdersContainer } from './styles'
import { api } from '../../utils/api';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isLoading, setIsLoading] = useState(false)
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

  async function handleChangeOrderStatus() {
    if (!selectedOrder) return;

    setIsLoading(true)

    const newStatus = selectedOrder.status === 'AWAITING' ? 'IN_PRODUCTION' : 'DONE'

    await api.patch(`/orders/${selectedOrder._id}`, { status: newStatus})

    toast.success(`O pedido da mesa ${selectedOrder.table} foi alterado!`)

    onChangeOrderStatus(selectedOrder._id, newStatus)
    setIsLoading(false)
    setIsModalVisible(false)
  }

  async function handleCancelOrder() {
    if (!selectedOrder) return;

    setIsLoading(true)

    await api.delete(`/orders/${selectedOrder._id}`)

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado!`)

    onCancelOrder(selectedOrder._id)
    setIsLoading(false)
    setIsModalVisible(false)
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        isLoading={isLoading}
        order={selectedOrder}
        onClose={handleCloseOrderModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

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
