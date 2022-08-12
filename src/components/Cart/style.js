import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  height: 125px;
  color: #1d1f22;
  font-weight: 700 bold;
  font-size: 32px;
  padding: 15px 0 0 20px;
  margin-top: 100px;
  text-transform: uppercase;
  line-height: 40px;
  border-bottom: 2px solid #e5e5e5;
`;
Container.Cart = styled.div`
  height: 336px;
  width: 100%;
  display: flex;
  /* background: red; */
  padding: 10px 0 10px 12px;
  margin-bottom: 15px;
  border-bottom: 2px solid #e5e5e5;
`;
Title.Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  line-height: 20px;
`;
const AddRemove = styled.div`
  width: ${({ image }) => (image ? "200px" : "45px")};
  height: 288px;
  display: flex;
  flex-direction: column;
  margin: ${({ image }) => (image ? "2% 0 0 1%" : "2% 0 0 60%")};
  justify-content: space-between;
`;
export { Container, Title, AddRemove };
