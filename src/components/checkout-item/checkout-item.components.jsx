import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  CheckoutImg,
  ImageContainer,
  Name,
  Quantity,
  Value,
  RemoveButton,
  Arrow,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImg src={imageUrl} alt={name} />
      </ImageContainer>
      <Name as="span">{name}</Name>
      <Quantity as="span">
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value as="span">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Name as="span">{price} </Name>
      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
