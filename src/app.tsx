import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";

const Wrapper = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Wrapper>
          <Navbar /> {/* Add Navbar here */}
          <Routes>
            <Route path="/" Component={ProductList} />
            <Route path="/cart" Component={Cart} />
            <Route path="/checkout" Component={Checkout} />
          </Routes>
        </Wrapper>
      </Router>
    </CartProvider>
  );
};

export default App;
