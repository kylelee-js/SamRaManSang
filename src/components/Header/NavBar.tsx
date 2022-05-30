import styled from "styled-components";
import LoginButton from "../Login/LoginButton";
import NavBarContent from "./NavBarContent";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

type NavBarType = {
  isLogin: boolean;
};
export default function NavBar({ isLogin }: NavBarType) {
  return <Container>{isLogin ? <NavBarContent /> : <LoginButton />}</Container>;
}
