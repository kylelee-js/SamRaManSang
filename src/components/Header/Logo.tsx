import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import useInterval from "../../hooks/useInterval";

const Container = styled.div`
  background-color: grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  // height * width ?
  cursor: pointer;
`;
const CI = styled.h1`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const wordFlip = keyframes`
  0%{
    opacity: 0;
  }
  30%, 80% {
    opacity: 1; 
  }
  100%{
    opacity: 0;
  }
`;

const Word = styled.span`
  color: black;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.2rem;
  animation: ${wordFlip} 7s infinite;
  animation-delay: calc(0.2s * var(--i));
`;

export default function Logo() {
  let [title, setTitle] = useState("森羅萬象");
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  useInterval(() => {
    if (title == "森羅萬象") {
      setTitle("삼라만상");
    } else {
      setTitle("森羅萬象");
    }
  }, 7000);
  return (
    <Container onClick={onClick}>
      {/* TODO: 폰트 적용하기 */}
      <CI>
        <Word>{title}</Word> : 신비한 상점
      </CI>
    </Container>
  );
}
