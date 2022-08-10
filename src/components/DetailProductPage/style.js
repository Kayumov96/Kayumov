import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 750px;
  margin-top: 150px;
  display: flex;
  background-color: green;
  gap: 25px;
`;
Container.Mini = styled.div`
  margin: ;
  width: 260px;
  height: inherit;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
`;
const Item = styled.div`
  width: 1002px;
  height: 595px;
  display: flex;
`;
const Imeg = styled.img`
  width: ${({ mini }) => (mini ? "150px" : "700px")};
  height: ${({ mini }) => (mini ? "150px" : "680px")};
`;
export { Container, Item, Imeg };
