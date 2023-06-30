import { useState } from 'react';

import { Menu } from '../Menu';
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
} from './styles';

export function Main() {
  const [selectedTable, setSelectedTable] = useState('');
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);

  function handleToggleModal() {
    setIsTableModalVisible(prev => !prev);
  }

  function handleSaveTableNumber(tableNumber: string) {
    setSelectedTable(tableNumber);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <Container>
        <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <FooterContainer>
        <Footer>
          {!selectedTable &&
            <Button onPress={handleToggleModal}>
              Novo Pedido
            </Button>
          }
        </Footer>
      </FooterContainer>

      <TableModal
        visible={isTableModalVisible}
        onSave={handleSaveTableNumber}
        onClose={handleToggleModal}
      />
    </>
  );
}
