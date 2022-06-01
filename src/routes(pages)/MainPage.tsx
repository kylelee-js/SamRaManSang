import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllProducts } from "../api/getAllProducts";
import CardCarousel from "../components/Carousel/CardCarousel";
import { Product } from "../components/ProductLayout/ProductGrid";
import ProductLayout from "../components/ProductLayout/ProductLayout";

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function MainPage() {
  const { data, isLoading } = useQuery<Product[]>(
    "allProduct",
    () => getAllProducts(),
    { refetchOnMount: true, suspense: true }
  );
  // const [data, setData] = useState<Product[]>([]);
  // const fetcher = async () => {
  //   const allProducts = await getAllProducts();
  //   setData(allProducts);
  // };

  // useEffect(() => {
  //   fetcher();
  // }, []);

  if (data !== undefined) {
    return (
      <Container>
        <CardCarousel />
        <ProductLayout products={data} />
      </Container>
    );
  }

  return <>"someting wrong"</>;
}
