import styled from "styled-components";
import { Product } from "../ProductLayout/ProductGrid";

// TODO: 스타일링 하기
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;
const ProductTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 20px;
`;
const ProductImg = styled.div`
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 40px;
  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
`;
const ProductDescription = styled.div`
  background-color: #dce0dd;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 10px;
  padding: 50px;
  width: 100%;
`;
const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ae0000;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  height: 50px;
`;

type ProductDescProps = {
  productDetail: Product;
};
export default function ProductDesc({ productDetail }: ProductDescProps) {
  const { id, title, image, description, category, price, rating } =
    productDetail;

  return (
    <Container>
      <ProductImg>
        <img src={image} alt="image" />
        <ProductPrice>{price}$</ProductPrice>
        <p>카테고리 : {category}</p>
      </ProductImg>
      <ProductDescription>
        <ProductTitle>{title}</ProductTitle>
        {/* Rating */}

        <p>{description}</p>
      </ProductDescription>
    </Container>
  );
}
