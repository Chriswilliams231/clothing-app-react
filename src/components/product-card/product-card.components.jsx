import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";

import {
  ProductCardContainer,
  BackgroundImage,
  Name,
  Price,
  ProductCardFooter,
  AddButton
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <BackgroundImage className="image" src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </ProductCardFooter>
      <AddButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
