import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex > -1) {
      // If item already in cart, update quantity
      newCart[existingItemIndex].quantity += 1;
    } else {
      // Else, add item to cart
      newCart.push({ ...item, quantity: 1 });
    }
    
    setCart(newCart);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };

  // Get cart total
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
