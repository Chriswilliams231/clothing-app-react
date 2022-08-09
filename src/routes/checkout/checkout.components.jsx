import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.components";

import {
  CheckoutContainer,
  CheckoutHeader,
  HearderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
