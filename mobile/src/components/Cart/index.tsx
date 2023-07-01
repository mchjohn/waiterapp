import { FlatList, TouchableOpacity } from 'react-native';

import { Product } from '../../types/products';
import { CartItem } from '../../types/cartItem';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';
import { Button } from '../Button';

import {
  Actions,
  Image,
  Item,
  ProductContainer,
  ProductDetails,
  QuantityContainer,
  Summary,
  TotalContainer
} from './styles';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { useState } from 'react';

interface CartProducts {
  cartItems: CartItem[]
  onAdd(product: Product): void
  onRemove(product: Product): void
  onConfirmOrder(): void
}

export function Cart({ cartItems, onAdd, onRemove, onConfirmOrder }: CartProducts) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleConfirmOrder() {
    setIsModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsModalVisible(false);
  }

  return (
    <>
      <OrderConfirmedModal visible={isModalVisible} onClose={handleOk} />

      {cartItems.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ maxHeight: 130, marginBottom: 20 }}
          data={cartItems}
          keyExtractor={({ product }) => product._id}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{ uri: `http://192.168.0.107:3001/uploads/${cartItem.product.imagePath}` }}
                />

                <QuantityContainer>
                  <Text size={14} color='#666'>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight='600'>
                    {cartItem.product.name}
                  </Text>

                  <Text size={14} color='#666' style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity style={{ marginRight: 14 }} onPress={() => onAdd(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onRemove(cartItem.product)}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>

              <Text size={20} weight='600'>
                {formatCurrency(total)}
              </Text>
            </>
          ) :
            (
              <Text size={16} color='#999'>
                Seu carrinho está vazio
              </Text>
            )
          }
        </TotalContainer>

        <Button
          loading={isLoading}
          disabled={cartItems.length === 0}
          onPress={handleConfirmOrder}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
