import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";

import {
  CheckoutContainer,
  CheckoutHeader,
  HearderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HearderBlock>
          <span>Product</span>
        </HearderBlock>
        <HearderBlock>
          <span>Description</span>
        </HearderBlock>
        <HearderBlock>
          <span>Quantity</span>
        </HearderBlock>
        <HearderBlock>
          <span>Price</span>
        </HearderBlock>
        <HearderBlock>
          <span>Remove</span>
        </HearderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
