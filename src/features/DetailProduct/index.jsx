import React, { useContext, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SelectProduct from "./component/SelectProduct";
import TextContent from "./component/TextContent";
import Product from "../HomePage/components/Product";
import NewProduct from "../HomePage/components/NewProduct";
import { AppContext } from "../../contextAPI/AppProvider";

export default function DetailProduct() {
  const { allProduct } = useContext(AppContext);
  const scroll = useRef(null);
  useEffect(() => {
    console.log(scroll);
    if (scroll) {
      scroll.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, []);
  return (
    <div className='app__container' ref={scroll}>
      {/* header  */}
      <Header />

      {/* main content */}
      <SelectProduct />
      <TextContent />
      <Product title='Khám Phá Thêm' data={allProduct.slice(0, 8)} />
      {/* main content */}

      {/* footer  */}
      <Footer />
    </div>
  );
}
