import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';

import { Container, Content, OrderHeader, Table } from './styles';

interface HeaderProps {
  selectedTable: string
  onCancelOrder(): void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable &&
        <>
          <Text size={14} opacity={0.9}>Bem-vinda(o) ao</Text>
          <Text size={24} weight='700' opacity={0.9}>
          WAITER <Text size={24}>APP</Text>
          </Text>
        </>
      }

      {selectedTable &&
        <Content>
          <OrderHeader>
            <Text size={24}>Pedido</Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text weight='600' color='#D73035'>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text color='#666'>
              Mesa {selectedTable}
            </Text>
          </Table>
        </Content>
      }
    </Container>
  );
}
