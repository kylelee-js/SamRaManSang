import styled from "styled-components";

const Button = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #b5adac;
  border-radius: 5px;
  border: none;
  width: 80px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    border: solid;
    border-color: black;
  }

  span {
    font-weight: 600;
  }
`;

export default function LoginButton() {
  return <Button>Login</Button>;
}
