import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getCategory } from "../../../api/getCategory";

const CategoryMenuBar = styled.nav`
  border: 1;
  ul {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
  }
`;

const Category = styled.li<{ isClicked: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? "#babfbb" : "#edebe4")};
  box-shadow: ${(props) =>
    props.isClicked ? "rgba(0, 0, 0, 0.24) 0px 3px 8px;" : "none"};
  font-size: 12px;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease-in;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;

  :hover {
    background-color: #d9d6d0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

type CategoryMenuProps = {
  getCateArr: (cateArr: string[]) => void;
};
export default function CategoryMenu({ getCateArr }: CategoryMenuProps) {
  // TODO: 선택된 카테고리를 URI 쿼리스트링에 추가하기 => 반대로 쿼리스트링(search)으로 통해 카테고리도 설정하기
  const { search } = useLocation();

  // if uri에 쿼리스트링이 있으면 그것으로 setState하기
  // TODO: 리덕스로 client state 관리하기
  let [clickedCategory, setClickedCategory] = useState<string[]>([]);

  // FIXME: 근데 useEffect로 하는거 맞나? 다른 훅이 있는지 찾아보자
  // useEffect(()=>{

  // },[clickedCategory])

  const onClick = (cate: string) => {
    if (clickedCategory.find((el) => el == cate)) {
      let idx = clickedCategory.findIndex(
        (category: string) => category == cate
      );
      setClickedCategory((prev) => [
        ...prev.slice(0, idx),
        ...prev.slice(idx + 1),
      ]);
    } else {
      setClickedCategory((prev) => [...prev, cate]);
    }
  };

  // 동기적 처리 dhk!!! PPAP!!!!!
  useEffect(() => {
    getCateArr(clickedCategory);
  }, [clickedCategory]);

  const { data, isLoading } = useQuery("category", () => getCategory());
  return (
    <CategoryMenuBar>
      <ul>
        {data?.map((cate: string, idx: number) => {
          return (
            <Category
              key={idx}
              onClick={() => onClick(cate)}
              isClicked={
                clickedCategory.find((el) => el == cate) ? true : false
              }
            >
              {cate}
            </Category>
          );
        })}
      </ul>
    </CategoryMenuBar>
  );
}
