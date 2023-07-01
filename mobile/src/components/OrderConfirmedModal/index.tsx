import { Modal } from 'react-native';

import { CheckCircle } from '../Icons/CheckCircle';

import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onClose(): void;
}

export function OrderConfirmedModal({ visible, onClose }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle />

        <Text size={20} color='#FFF' weight='600' style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text opacity={0.9} color='#FFF' style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButton onPress={onClose}>
          <Text color='#D73035' weight='600'>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
