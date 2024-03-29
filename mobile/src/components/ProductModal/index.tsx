import { FlatList, Modal } from 'react-native';

import { Close } from '../Icons/Close';
import { Product } from '../../types/products';
import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';

import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer
} from './styles';
import { Button } from '../Button';

interface ProductModal {
  visible: boolean;
  product: null | Product;
  onClose(): void;
  onAddToCart(product: Product): void;
}

export function ProductModal({ visible, product, onClose, onAddToCart }: ProductModal) {
  if (!product) return null;

  function handleAddToCart() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{ uri: `http://192.168.0.107:3001/uploads/${product.imagePath}` }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text color='#666' style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 &&
          <IngredientsContainer weight='600' color='#666'>
            <Text>Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={({ _id }) => _id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>
                    {ingredient.icon}
                  </Text>
                  <Text size={14} color='#666' style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
