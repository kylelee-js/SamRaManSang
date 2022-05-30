import styled from "styled-components";
import CardCarousel from "../components/Carousel/CardCarousel";
import ProductLayout from "../components/ProductLayout/ProductLayout";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function MainPage() {
  return (
    <Container>
      <CardCarousel />
      <ProductLayout />
    </Container>
  );
}
