import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllProducts } from "../../api/getAllProducts";
import ProductBox from "./ProductBox";

const Contaier = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
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

type ProductGridProps = {
  product: Product[] | undefined;
};
export default function ProductGrid({ product }: ProductGridProps) {
  // TODO: framer-motion layout 애니메이션으로 정렬 애니메이션 추가하기
  return (
    <Contaier>
      {product?.map((product, idx) => {
        return <ProductBox key={idx} product={product} />;
      })}
    </Contaier>
  );
}
