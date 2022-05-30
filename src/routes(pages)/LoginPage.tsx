import styled from "styled-components";
import LoginModal from "../components/Login/LoginModal";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

export default function LoginPage() {
  return (
    <Container>
      <Overlay />
      <LoginModal />
    </Container>
  );
}
