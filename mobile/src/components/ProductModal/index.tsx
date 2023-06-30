import { Modal } from 'react-native';

import { Close } from '../Icons/Close';
import { Product } from '../../types/products';

import { Text } from '../Text';

import { CloseButton, Header, Image, ModalBody } from './styles';

interface ProductModal {
  visible: boolean;
  product: null | Product;
  onClose(): void;
}

export function ProductModal({ visible, product, onClose }: ProductModal) {
  if (!product) return null;

  console.debug('Product', product);

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
      </ModalBody>
    </Modal>
  );
}
