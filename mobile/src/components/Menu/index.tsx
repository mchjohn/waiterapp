import { useState } from 'react';
import { FlatList } from 'react-native';

import { Product } from '../../types/products';
import { PlusCircle } from '../Icons/PlusCircle';

import { Text } from '../Text';
import { ProductModal } from '../ProductModal';
import { formatCurrency } from '../../utils/formatCurrency';

import {
  ProductImage,
  ProductContainer,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';

interface MenuProps {
  products: Product[];
  onAddToCart(product: Product): void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);

    setIsModalVisible(true);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        product={selectedProduct}
        onClose={() => setIsModalVisible(false)}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={({ _id }) => _id}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleSelectProduct(product)}>
            <ProductImage
              source={{ uri: `http://192.168.0.107:3001/uploads/${product.imagePath}` }}
            />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8  }}>
                {product.description}
              </Text>
              <Text size={14} color='#333' weight='600'>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
