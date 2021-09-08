import React from "react";
import PropTypes from "prop-types";
import "../asset/css/product.scss";
import { useHistory } from "react-router";

Product.propTypes = { title: PropTypes.string, data: PropTypes.array };

function Product({ title, children, data }) {
  const history = useHistory();
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className='product'>
        <h3 className='product__title'>{title}</h3>
        <ul className='product__list'>
          {data?.map((product, index) => {
            return (
              <li className='product__list__item' key={product.id}>
                <div
                  className='product__list__item-img'
                  style={{
                    background: `url('${
                      process.env.PUBLIC_URL + "../images/product/" + product.image
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
    </>
  );
}

export default Product;
