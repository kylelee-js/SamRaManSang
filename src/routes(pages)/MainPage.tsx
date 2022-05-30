import styled from "styled-components";
import CardCarousel from "../components/Carousel/CardCarousel";
import ProductGrid from "../components/ProductList/ProductGrid";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function MainPage() {
  return (
    <Container>
      <CardCarousel />
      <ProductGrid />
    </Container>
  );
}
