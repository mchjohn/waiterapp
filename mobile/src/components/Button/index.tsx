import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';

import { Container } from './styles';

interface ButtonProps {
  children: string;
  loading?: boolean;
  disabled?: boolean;
  onPress(): void;
}

export function Button({ children, loading, disabled, onPress }: ButtonProps) {
  return (
    <Container disabled={disabled || loading} onPress={onPress}>
      {!loading && <Text weight='600' color='#FFF'>{children}</Text>}

      {loading && <ActivityIndicator color='#FFF' size='small' />}
    </Container>
  );
}
