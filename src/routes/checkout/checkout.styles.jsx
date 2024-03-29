import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  height:40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  
 
`;

export const HearderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
 
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
