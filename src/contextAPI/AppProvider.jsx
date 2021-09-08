import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import products from "../data.json";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [cart, setCart] = useState(0);
  const productGet = products.topProduct;
  const [allProduct, setallProduct] = useState(productGet);
  const topProduct = products.topProduct.sort((a, b) => b.numberSell - a.numberSell).slice(0, 4);
  const newProduct = products.topProduct
    .sort((a, b) => {
      const date1 = new Date(a.dateInput);
      const date2 = new Date(b.dateInput);
      return date2 - date1;
    })
    .slice(0, 8);
  const popularProduct = products.topProduct
    .sort((a, b) => {
      return b.view - a.view;
    })
    .slice(0, 12);
  const handleAddCart = (value) => {
    toast.success("🦄 Add to cart successfully!");
    setCart(cart + value);
  };
  const handleSetProduct = () => {
    setallProduct(productGet);
  };
  const handleFilter = (filter) => {
    // console.log(Object.keys(filter));
    if (Object.keys(filter).length > 0) {
      const { shape, color } = filter;
      if (shape && color) {
        const test = products.topProduct.filter((product) => {
          return product.color === color && product.shape === shape;
        });
        console.log("1", test);

        setallProduct([...test]);
      } else if (shape) {
        const test = products.topProduct.filter((product) => {
          return product.shape === shape;
        });
        setallProduct([...test]);
        console.log(test);
      } else if (color) {
        const test = products.topProduct.filter((product) => {
          return product.color === color;
        });
        setallProduct([...test]);
      }
    } else {
      console.log("vao truong hop clea");
      setallProduct(productGet);
    }
  };
  return (
    <AppContext.Provider
      value={{
        handleSetProduct,
        allProduct,
        topProduct,
        newProduct,
        popularProduct,
        handleFilter,
        cart: cart,
        handleAddCart: handleAddCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
