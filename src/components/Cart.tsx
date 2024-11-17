import React from "react";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    clearCart();
    alert("Checkout successful! Thank you for your purchase.");
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>${item.price.toFixed(2)}</p>
          </ItemDetails>
          <div>
            <QuantityInput
              type="number"
              value={item.quantity || 1}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value) || 1)
              }
            />
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        </CartItem>
      ))}
      {cart.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
