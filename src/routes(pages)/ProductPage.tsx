import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../api/getProduct";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { Product } from "../components/ProductLayout/ProductGrid";

const Container = styled.div``;
export default function ProductPage() {
  const { pathname } = useLocation();
  const [, , id] = pathname.split("/");
  const { data, isLoading } = useQuery<Product>(
    "singleProduct",
    () => getProduct(id),
    { suspense: true }
  );

  // const [data, setData] = useState<Product>();
  // const fetcher = async () => {
  //   const allProducts = await getProduct(id);
  //   setData(allProducts);
  // };

  // useEffect(() => {
  //   fetcher();
  // }, []);
  if (data !== undefined) {
    return (
      <Container>
        <ProductDetail product={data} />
      </Container>
    );
  }
  return <>"someting wrong"</>;
}
