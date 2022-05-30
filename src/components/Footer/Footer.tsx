import styled from "styled-components";
import BusinessInfo from "./BusinessInfo/BusinessInfo";
import CorpInfo from "./CorpInfo/CorpInfo";
import SNSInfo from "./SNSInfo/SNSInfo";

const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #dedede;
  height: 200px;
  bottom: 0;
  width: 100%;
`;
export default function Footer() {
  return (
    <Container>
      <CorpInfo />
      <BusinessInfo />
      <SNSInfo />
    </Container>
  );
}
