import { Container } from './styles'

import { OrdersBoard } from '../OrdersBoard'

import { Order } from '../../types/Order'

const orders: Order[] = [
	{
		"_id": "649728e93525ba12a5e39c3e",
		"table": "1",
		"status": "AWAITING",
		"products": [
			{
				"product": {
					"name": "Coca-Cola",
					"imagePath": "1687625776376-coca-cola.png",
					"price": 7,
				},
				"quantity": 2,
				"_id": "649728e93525ba12a5e39c3f"
			}
		],
	}
]

export function Orders() {
  return <Container>
    <OrdersBoard icon='⏰' title='Fila de espera' orders={orders} />
    <OrdersBoard icon='👩‍🍳' title='Em preparação' orders={[]} />
    <OrdersBoard icon='✅' title='Pronto' orders={[]} />
  </Container>
}
