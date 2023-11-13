/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Header({ cart, onNavigateToCart }) {
  return (
    <Container>
      <h1>Bem-vindo(a) à nossa loja!</h1>
      <div>
        <small onClick={onNavigateToCart}>
          Carrinho: {cart?.products?.length}
        </small>
      </div>
    </Container>
  );
}

export default Header;
