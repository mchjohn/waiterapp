import { Menu } from '../Menu';
import { Header } from '../Header';
import { Button } from '../Button';
import { Categories } from '../Categories';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  FooterContainer,
  Footer,
} from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <FooterContainer>
        <Footer>
          <Button onPress={() => {}}>
            Novo Pedido
          </Button>
        </Footer>
      </FooterContainer>
    </>
  );
}
