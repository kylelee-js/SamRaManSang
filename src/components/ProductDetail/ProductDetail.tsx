import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../../api/getProduct";
import { Product } from "../ProductLayout/ProductGrid";
import ProductDesc from "./ProductDesc";

const Wrapper = styled.div``;

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  // if (isLoading) {
  //   return <Wrapper>"loading..." </Wrapper>;
  // }
  if (product !== undefined) {
    return (
      <Wrapper>
        <ProductDesc productDetail={product} />
        {/* TODO: 주문 컴포넌트 */}
        {/* 주문 컴포넌트 - Order */}
      </Wrapper>
    );
  }

  return <>"someting wrong"</>;
}
