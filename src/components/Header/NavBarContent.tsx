import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin: 15px;
`;
const NavList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
const NavListContent = styled.li`
  transition: all 0.3s ease-in-out;
  :hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export default function NavBarContent() {
  const navigate = useNavigate();

  return (
    <Container>
      <NavList>
        <NavListContent
          onClick={() => {
            navigate("/mycart");
          }}
        >
          My Cart
        </NavListContent>
        <NavListContent
          onClick={() => {
            navigate("/wishlist");
          }}
        >
          My Fav
        </NavListContent>
        <NavListContent
          onClick={() => {
            navigate("/event");
          }}
        >
          Event
        </NavListContent>
        <NavListContent
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </NavListContent>
        <NavListContent
          onClick={() => {
            console.log("log out");
          }}
        >
          Logout
        </NavListContent>
      </NavList>
    </Container>
  );
}
