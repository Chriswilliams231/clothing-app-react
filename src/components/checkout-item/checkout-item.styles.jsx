import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.div`
  width: 23%;
`;
export const CheckoutPrice = styled(Name);

export const Quantity = styled(Name)`
  display: flex;
`;

export const Arrow = styled(Quantity)`
  cursor: pointer;
`;
export const Value = styled(Quantity)`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

// .checkout-item-container {

//   .image-container {

//     img {

//     }
//   }
//   .name,
//   .quantity,
//   .price {

//   }

//   .quantity {

//     .arrow {

//     }

//     .value {

//     }
//   }

//   .remove-button {

//   }
// }
