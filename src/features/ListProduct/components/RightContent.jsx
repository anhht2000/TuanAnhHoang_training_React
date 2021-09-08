import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../../contextAPI/AppProvider";

export default function RightContent() {
  const history = useHistory();
  const { allProduct } = useContext(AppContext);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className='app__main__right'>
      <ul className='product__list'>
        {allProduct?.map((product) => {
          return (
            <li className='product__list__item' key={product.id}>
              <div
                className='product__list__item-img'
                style={{
                  background: `url('${
                    process.env.PUBLIC_URL + "./images/product/" + product.image
                  }') center center/cover no-repeat`,
                }}
              ></div>
              <div className='product__list__item-info'>
                <p className='product__list__item-info-name'>{product.name}</p>
                <div className='product__list__item-info-price'>
                  <p className='product__list__item-info-price-new'>
                    {formatter.format(product.newPrice)}
                  </p>
                  <p className='product__list__item-info-price-old'>
                    {formatter.format(product.oldPrice)}
                  </p>
                </div>
                <span
                  className='product__list__item-info-button'
                  onClick={() => {
                    history.push("/detail-product/" + product.id);
                  }}
                >
                  Chọn Mua
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
