import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { AppContext } from "../../../contextAPI/AppProvider";
import "../asset/css/selectProduct.scss";
import product2 from "../asset/images/product/product-02 (1).jpg";

export default function SelectProduct() {
  const [amount, setAmount] = useState(1);
  const history = useHistory();
  const { idProduct } = useParams();
  const { allProduct } = useContext(AppContext);
  const product = allProduct.find((product) => product.id === Number(idProduct));
  console.log(product);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //context
  const { handleAddCart } = useContext(AppContext);
  //handle
  const handleAdd = () => {
    setAmount(amount + 1);
  };
  const handleSub = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className='app__main__select-product'>
      <div className='app__main__select-product-left'>
        <img
          src={process.env.PUBLIC_URL + "../images/product/" + product.image}
          alt=''
          className='app__main__select-product-left-img'
        />
        <img
          src={product2}
          alt=''
          className='app__main__select-product-left-img'
          onClick={() => {
            history.push("/detail-product/3");
          }}
        />
      </div>
      <div className='app__main__select-product-center'>
        <img
          src={process.env.PUBLIC_URL + "../images/product/" + product.image}
          alt=''
          className='app__main__select-product-center-img'
        />
      </div>
      <div className='app__main__select-product-right'>
        <div className='app__main__select-product-right__content'>
          <h3 className='app__main__select-product-right__content-title'>{product.name}</h3>
          <p className='app__main__select-product-right__content-price'>
            {formatter.format(product.newPrice)}
          </p>
          <div className='app__main__select-product-right__content-select'>
            <p className='app__main__select-product-right__content-select-title'>Màu sắc</p>
            <div className='app__main__select-product-right__content-select-color'>
              <p
                className='app__main__select-product-right__content-select-color-white'
                onClick={() => {
                  history.push("/detail-product/9");
                }}
              ></p>
              <p
                className='app__main__select-product-right__content-select-color-red'
                onClick={() => {
                  history.push("/detail-product/2");
                }}
              ></p>
              <p
                className='app__main__select-product-right__content-select-color-yellow'
                onClick={() => {
                  history.push("/detail-product/5");
                }}
              ></p>
            </div>
          </div>
          <div className='app__main__select-product-right__content-select'>
            <p className='app__main__select-product-right__content-select-title'>Kích cỡ</p>
            <div className='app__main__select-product-right__content-select-size'>
              <p
                className='app__main__select-product-right__content-select-size-S'
                onClick={() => {
                  history.push("/detail-product/1");
                }}
              >
                S
              </p>
              <p
                className='app__main__select-product-right__content-select-size-M'
                onClick={() => {
                  history.push("/detail-product/4");
                }}
              >
                M
              </p>
              <p
                className='app__main__select-product-right__content-select-size-L'
                onClick={() => {
                  history.push("/detail-product/9");
                }}
              >
                L
              </p>
              <p
                className='app__main__select-product-right__content-select-size-XL'
                onClick={() => {
                  history.push("/detail-product/7");
                }}
              >
                XL
              </p>
            </div>
          </div>
          <div className='app__main__select-product-right__content-select'>
            <p className='app__main__select-product-right__content-select-title'>Số lượng</p>
            <div className='app__main__select-product-right__content-select-amount'>
              <p
                className='app__main__select-product-right__content-select-amount-sub'
                onClick={handleSub}
              >
                -
              </p>
              <p className='app__main__select-product-right__content-select-amount-number'>
                {amount}
              </p>
              <p
                className='app__main__select-product-right__content-select-amount-add'
                onClick={handleAdd}
              >
                +
              </p>
            </div>
          </div>
          <div className='app__main__select-product-right__content-action'>
            <span
              className='app__main__select-product-right__content-action-button'
              onClick={() => handleAddCart(amount)}
            >
              Thêm vào giỏ
            </span>
            <span className='app__main__select-product-right__content-action-button'>Mua ngay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
