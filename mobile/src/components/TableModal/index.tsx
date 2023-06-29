import { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';

import { Text } from '../Text';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

import { ModalBody, ModalForm, ModalHeader, ModalInput, Overlay } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose(): void;
  onSave(tableNumber: string): void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [tableNumber, setTableNumber] = useState('');

  function handleSave() {
    onSave(tableNumber);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      >
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </ModalHeader>

          <ModalForm>
            <ModalInput
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              keyboardType='number-pad'
              onChangeText={setTableNumber}
            />

            <Button onPress={handleSave} disabled={tableNumber.length === 0}>
              Salvar
            </Button>
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
