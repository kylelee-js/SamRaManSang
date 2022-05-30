import { useNavigate, useNavigationType } from "react-router-dom";
import styled from "styled-components";
import { Product } from "./ProductGrid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 430px;
  border-radius: 5px;
  background-color: #dce0dd;
  transition: all 0.2s ease-in;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateY(-10px);
  }
`;

const ProductImg = styled.img`
  padding: 7px;
  width: 100%;
  height: 240px;
  border-radius: 3px;
`;

const ProductTitle = styled.p`
  padding: 15px;
  width: 250px;
  height: 50px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProductDesc = styled.p``;

type productProps = {
  product: Product;
};
export default function ProductBox({ product }: productProps) {
  const { id, title, image, description, category, price, rating } = product;

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Container onClick={onClick}>
      {/* TODO: 스타일링 하기 */}
      <ProductTitle>{title}</ProductTitle>
      <ProductImg src={image} alt="image" />
      <ProductDesc>{price}$</ProductDesc>
    </Container>
  );
}
