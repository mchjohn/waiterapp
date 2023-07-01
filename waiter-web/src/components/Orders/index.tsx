import { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'

import { Container } from './styles'

import { OrdersBoard } from '../OrdersBoard'

import { api } from '../../utils/api'
import { Order } from '../../types/Order'

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    })

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order))
    })
  }, [])

  useEffect(() => {
    api.get('/orders').then(response => {
      setOrders(response.data)
    });
  }, [])

  const waitingOrders = orders.filter(order => order.status === 'AWAITING')
  const inProductionOrders = orders.filter(order => order.status === 'IN_PRODUCTION')
  const doneOrders = orders.filter(order => order.status === 'DONE')

  function handleCancelOrder(orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders(prevState => prevState.map(order => (
      order._id === orderId ? { ...order, status }
      : order
    )))
  }

  return <Container>
    <OrdersBoard
      icon='⏰'
      title='Fila de espera'
      orders={waitingOrders}
      onCancelOrder={handleCancelOrder}
      onChangeOrderStatus={handleOrderStatusChange}
    />
    <OrdersBoard
      icon='👩‍🍳'
      title='Em preparação'
      orders={inProductionOrders}
      onCancelOrder={handleCancelOrder}
      onChangeOrderStatus={handleOrderStatusChange}
    />
    <OrdersBoard
      icon='✅'
      title='Pronto'
      orders={doneOrders}
      onCancelOrder={handleCancelOrder}
      onChangeOrderStatus={handleOrderStatusChange}
    />
  </Container>
}
