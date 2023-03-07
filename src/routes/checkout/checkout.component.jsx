import { React, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  return (
    <div>
      <h1>ChekcOut page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>

              <span>decrement </span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}> increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
