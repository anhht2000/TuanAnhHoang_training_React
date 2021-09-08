import React, { useContext } from "react";
import { AppContext } from "../../../contextAPI/AppProvider";
import product1 from "../asset/images/product/product-01 (1).jpg";
import product2 from "../asset/images/product/product-02 (1).jpg";
import product3 from "../asset/images/product/product-03 (1).jpg";
import product4 from "../asset/images/product/product-04 (1).jpg";
import product5 from "../asset/images/product/product-05 (1).jpg";
import product6 from "../asset/images/product/product-06 (1).jpg";
import product7 from "../asset/images/product/product-07 (1).jpg";
import product8 from "../asset/images/product/product-08 (1).jpg";
import product9 from "../asset/images/product/product-09 (1).jpg";
import product10 from "../asset/images/product/product-10 (1).jpg";
import product11 from "../asset/images/product/product-11 (1).jpg";
import product12 from "../asset/images/product/product-12.jpg";

export default function TopProduct() {
  const { topProduct } = useContext(AppContext);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <ul className='product__list'>
        {topProduct?.map((element, index) => (
          <li className='product__list__item' key={index}>
            <div
              className='product__list__item-img'
              style={{
                background: `url('${
                  process.env.PUBLIC_URL + "./images/product/" + element.image
                }') center center/cover no-repeat`,
              }}
            />
            <div className='product__list__item-info'>
              <p className='product__list__item-info-name'>{element.name}</p>
              <div className='product__list__item-info-price'>
                <p className='product__list__item-info-price-new'>
                  {formatter.format(element.newPrice)}
                </p>
                <p className='product__list__item-info-price-old'>
                  {formatter.format(element.oldPrice)}
                </p>
              </div>
              <a href='/' className='product__list__item-info-button'>
                Chọn Mua
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
