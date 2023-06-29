import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onPress(): void;
}

export function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Text weight='600' color='#FFF'>{children}</Text>
    </Container>
  );
}
