import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import ProductBox from "./ProductBox";

const Contaier = styled(motion.div)`
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
  products: Product[];
  onClick: boolean;
};
export default function ProductGrid({ products, onClick }: ProductGridProps) {
  return (
    <Contaier
      animate={onClick ? { opacity: [1, 0, 1] } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {products?.map((product, idx) => (
          <ProductBox key={idx} product={product} />
        ))}
      </AnimatePresence>
    </Contaier>
  );
}
