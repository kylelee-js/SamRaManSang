import styled from "styled-components";
import { Product } from "./ProductGrid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

type productProps = {
  product: Product;
};
export default function ProductBox({ product }: productProps) {
  const { title, image, description, category, price, rating } = product;
  return (
    <Container>
      {/* TODO: 스타일링 하기 */}
      <p>{title}</p>
      <img src={image} alt="image" />
      <p>{price}$</p>
    </Container>
  );
}
