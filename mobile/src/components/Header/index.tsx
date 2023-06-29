import { Text } from '../Text';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Text size={14} opacity={0.9}>Bem-vinda(o) ao</Text>
      <Text size={24} weight='700' opacity={0.9}>
        WAITER <Text size={24}>APP</Text>
      </Text>
    </Container>
  );
}
