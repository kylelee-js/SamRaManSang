import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import useInterval from "../../hooks/useInterval";

const Container = styled.div`
  background-color: grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  // height * width ?
`;
const CI = styled.h1`
  font-size: 16px;
  font-weight: 600;
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
  animation: ${wordFlip} 7s infinite;
  animation-delay: calc(0.2s * var(--i));
`;

// const Word = styled.span``;

export default function Logo() {
  let [title, setTitle] = useState("森羅萬象");

  useInterval(() => {
    if (title == "森羅萬象") {
      setTitle("삼라만상");
    } else {
      setTitle("森羅萬象");
    }
  }, 7000);
  return (
    <Container>
      {/* TODO: 폰트 적용하기 */}
      <CI>
        <Word>{title}</Word> : 신비한 상점
      </CI>
    </Container>
  );
}
