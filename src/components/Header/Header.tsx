// import styled-components from
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";

const LoginInput = styled.input`
  background-color: rgb(245, 245, 245);
  border: rgba(0, 0, 0, 0);
  :focus {
    color: rgb(0, 153, 255);
  }
  ::placeholder {
    color: rgb(170, 170, 170);
  }
  font-size: 13px;
  color: rgb(51, 51, 51);
  border-width: 1px;
  padding: 15px;
  border-radius: 8px;
`;

const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dedede;
`;

export default function Header() {
  return (
    <Container>
      <Logo />

      {/* 여기에 로그인 전 후 처리 해주기 */}
      <NavBar isLogin={true} />
    </Container>
  );
}
