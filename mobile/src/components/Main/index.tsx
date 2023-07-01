import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { Product } from '../../types/products';
import { CartItem } from '../../types/cartItem';
import { Category } from '../../types/category';

import { Empty } from '../Icons/Empty';

import { Menu } from '../Menu';
import { Cart } from '../Cart';
import { Text } from '../Text';
import { Header } from '../Header';
import { Button } from '../Button';
import { Categories } from '../Categories';
import { TableModal } from '../TableModal';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  FooterContainer,
  Footer,
  CenteredContainer,
} from './styles';
import { api } from '../../utils/api';

export function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  function handleToggleModal() {
    setIsTableModalVisible(prev => !prev);
  }

  function handleSaveTableNumber(tableNumber: string) {
    setSelectedTable(tableNumber);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems(prevState => {
      const indexItem = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      if (indexItem < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[indexItem];

      newCartItems[indexItem] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementItemCart(product: Product) {
    setCartItems(prevState => {
      const indexItem = prevState.findIndex(cartItem => cartItem.product._id === product._id);

      const item = prevState[indexItem];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(indexItem, 1);

        return newCartItems;
      }

      newCartItems[indexItem] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);

    setIsLoadingProducts(false);
  }

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products')
    ]).then(([categoryResponse, productResponse]) => {
      setCategories(categoryResponse.data);
      setProducts(productResponse.data);

      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleResetOrder} />

        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator color='#d73035' size='large' />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories categories={categories} onSelectCategory={handleSelectCategory} />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color='#d73035' size='large' />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu products={products} onAddToCart={handleAddToCart} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color='#666' style={{ marginTop: 24 }}>
                    Nenhum produto foi encontrado
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable &&
            <Button disabled={isLoading} onPress={handleToggleModal}>
              Novo Pedido
            </Button>
          }

          {selectedTable &&
            <Cart
              cartItems={cartItems}
              selectedTable={selectedTable}
              onAdd={handleAddToCart}
              onRemove={handleDecrementItemCart}
              onConfirmOrder={handleResetOrder}
            />
          }
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onSave={handleSaveTableNumber}
        onClose={handleToggleModal}
      />
    </>
  );
}
