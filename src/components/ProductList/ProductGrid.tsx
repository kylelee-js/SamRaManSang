import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllProducts } from "../../api/getAllProducts";
import ProductBox from "./ProductBox";

const Contaier = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default function ProductGrid() {
  // TODO: 과연 여기서 데이터를 받는게 맞나? 상위 App이나 server state를 받는 상위 컴포넌트로부터 상속 받아야하지 않을까?
  const { data, isLoading } = useQuery<Product[]>("allProduct", () =>
    getAllProducts()
  );

  return (
    <Contaier>
      {data?.slice(0, 15).map((product) => {
        return <ProductBox product={product} />;
      })}
    </Contaier>
  );
}
