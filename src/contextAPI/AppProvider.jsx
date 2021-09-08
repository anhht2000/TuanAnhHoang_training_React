import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import product from "../data.json";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [cart, setCart] = useState(0);
  const allProduct = product.topProduct;
  const topProduct = product.topProduct.sort((a, b) => b.numberSell - a.numberSell).slice(0, 4);
  const newProduct = product.topProduct
    .sort((a, b) => {
      const date1 = new Date(a.dateInput);
      const date2 = new Date(b.dateInput);
      return date2 - date1;
    })
    .slice(0, 8);
  const popularProduct = product.topProduct
    .sort((a, b) => {
      return b.view - a.view;
    })
    .slice(0, 12);
  console.log(popularProduct);
  const handleAddCart = (value) => {
    toast.success("🦄 Add to cart successfully!");
    setCart(cart + value);
  };
  return (
    <AppContext.Provider
      value={{
        allProduct,
        topProduct,
        newProduct,
        popularProduct,
        cart: cart,
        handleAddCart: handleAddCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
