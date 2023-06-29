import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { PlusCircle } from '../Icons/PlusCircle';
import { formatCurrency } from '../../utils/formatCurrency';

import { Text } from '../Text';

import {
  ProductImage,
  Product,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={({ _id }) => _id}
      renderItem={({ item: product }) => (
        <Product>
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

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
