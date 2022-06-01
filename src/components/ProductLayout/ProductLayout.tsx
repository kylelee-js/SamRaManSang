import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAllProducts } from "../../api/getAllProducts";
import CategoryMenu from "./CategoryMenuBar/CategoryMenu";
import ProductGrid, { Product } from "./ProductGrid";

const Container = styled.div``;

type ProductLayoutProps = {
  products: Product[];
};
export default function ProductLayout({ products }: ProductLayoutProps) {
  // FIXME: 동기적으로 data 받아올 때까지 state
  const [product, setProduct] = useState<Product[]>([]);
  const [onClick, setOnClick] = useState(false);

  // TODO: 정렬시 쿼리스트링 URI에 추가하기
  // location.push("?cate= 이런식?")
  useEffect(() => {
    if (products !== undefined) {
      setProduct(products);
    }
  }, [products]);

  // if (isLoading) {
  //   return (
  //     <Container>
  //       <>Loading...</>
  //     </Container>
  //   );
  // }

  if (products !== undefined) {
    return (
      <Container>
        <CategoryMenu
          setProduct={setProduct}
          productData={products}
          setOnClick={setOnClick}
        />
        <ProductGrid products={product} onClick={onClick} />
      </Container>
    );
  }
  return <>"someting wrong"</>;
}
