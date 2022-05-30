import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllProducts } from "../../api/getAllProducts";
import CategoryMenu from "./CategoryMenuBar/CategoryMenu";
import ProductGrid, { Product } from "./ProductGrid";

const Container = styled.div``;

export default function ProductLayout() {
  let [category, setCategory] = useState<string[]>([]);
  const { data, isLoading } = useQuery<Product[]>("allProduct", () =>
    getAllProducts()
  );

  const getCategory = useCallback(
    (cateArr: string[]) => {
      // TODO: 정렬시 쿼리스트링 URI에 추가하기
      // location.push("?cate= 이런식?")
      setCategory([...cateArr]);
    },
    [category]
  );

  return (
    <Container>
      <CategoryMenu getCateArr={getCategory} />
      <ProductGrid
        product={
          category.length == 0
            ? data
            : data?.filter((el) => category.find((e) => e == el.category))
        }
      />
    </Container>
  );
}
