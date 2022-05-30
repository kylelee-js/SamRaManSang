import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../../api/getProduct";
import { Product } from "../ProductLayout/ProductGrid";

const Wrapper = styled.div``;

export default function ProductDesc() {
  const { pathname } = useLocation();
  const [, , id] = pathname.split("/");
  const { data, isLoading } = useQuery<Product>("allProduct", () =>
    getProduct(id)
  );

  return (
    <Wrapper>{isLoading ? "loading..." : <img src={data?.image} />}</Wrapper>
  );
}
