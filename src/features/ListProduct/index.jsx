import React from "react";
import "./asset/css/index.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Maincontent from "./components/Maincontent";

export default function ListProduct() {
  return (
    <div className='app__container'>
      {/* header  */}
      <Header />
      {/* main content */}
      <Maincontent />
      {/* footer  */}

      <Footer />
    </div>
  );
}
