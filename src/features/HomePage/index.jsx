import React, { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AppContext } from "../../contextAPI/AppProvider";
import "./asset/css/index.scss";
import Payment from "./components/Payment";
import Product from "./components/Product";
import SliderContainer from "./components/Slider";

export default function Homepage() {
  const { topProduct, newProduct, popularProduct } = useContext(AppContext);

  return (
    <div className='app__container'>
      {/* header  */}
      <Header />
      {/* slider  */}
      <SliderContainer />
      {/* payment  */}
      <Payment />
      {/* top product  */}
      <Product title={"Top Sản Phẩm Bán Chạy Trong Tuần"} data={topProduct} />
      {/* new product  */}
      <Product title={"Sản Phẩm Mới"} data={newProduct} />
      {/* banner */}
      <div class='banner'></div>
      {/* popular product  */}
      <Product title={"Phổ Biến"} data={popularProduct} />
      {/* footer  */}
      <Footer />
    </div>
  );
}
