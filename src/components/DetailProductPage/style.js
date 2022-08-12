import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 750px;
  margin-top: 150px;
  display: flex;
  /* background-color: green; */
  gap: 25px;
`;
Container.Mini = styled.div`
  width: 260px;
  height: inherit;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
`;
Container.Info = styled.div`
  width: 700px;
  height: inherit;
  display: flex;
  padding: 15px;
  flex-direction: column;
  /* background-color: red; */
`;
const Item = styled.div`
  width: 1002px;
  height: 595px;
  display: flex;
`;
const Imeg = styled.img`
  width: ${({ mini }) => (mini ? "150px" : "600px")};
  height: ${({ mini }) => (mini ? "150px" : "680px")};
`;
const Text = styled.div`
  font-weight: ${({ title }) => (title ? "800" : "400")};
  font-size: ${({ title }) => (title ? "30px" : "30px")};
  line-height: 30px;
  color: #1d1f22;
`;
Text.Mini = styled.div`
  margin-top: ${({ cart }) => (cart ? "10px" : "43px")};
  width: ${({ description }) => (description ? "340px" : "")};
  height: ${({ description }) => (description ? "105px" : "")};
  text-transform: ${({ description }) => (description ? "" : "uppercase")};
  font-size: ${({ description }) => (description ? "16px" : "18px")};
  line-height: ${({ description }) => (description ? "159.96%" : "18px")};
  font-weight: ${({ description }) => (description ? "400" : "bold")};
  color: #1d1f22;
`;
const Button = styled.button`
  width: 90%;
  height: 52px;
  color: #ffffff;
  border: none;
  background: #5ece7b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 20px 0 40px 0;
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;
Button.Size = styled.div`
  width: 63px;
  height: 45px;
  color: #1d1f22;
  border: 1px solid #1d1f22;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
`;
const Getsize = styled.div`
  /* position: absolute; */
  margin: ${({ cart }) => (cart ? "7px 0 8px 0" : "8px 0 24px 0")};
  display: flex;
  height: 50px;
  width: 90%;
  gap: 12px;
  align-items: center;
  /* background: grey; */
`;
export { Container, Item, Imeg, Text, Button, Getsize };
