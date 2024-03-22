import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
`;

export default function BoxWithStyledComponents() {
  return <StyledBox />;
}
