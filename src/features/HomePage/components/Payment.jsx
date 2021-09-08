import React from "react";
import "../asset/css/payment.scss";

export default function Payment() {
  return (
    <>
      <div className='service'>
        <ul className='service__container'>
          <li className='service__container-item'>
            <i className='fas fa-shopping-bag service__container-item-icon'></i>
            <div className='service__container-item-info'>
              <p className='service__container-item-info__title'>Miễn phí giao hàng</p>
              <p className='service__container-item-info__subtitle'>
                Miễn phí ship với đơn hàng 239k
              </p>
            </div>
          </li>
          <li className='service__container-item'>
            <i className='fas fa-id-card service__container-item-icon'></i>
            <div className='service__container-item-info'>
              <p className='service__container-item-info__title'>Thanh toán COD</p>
              <p className='service__container-item-info__subtitle'>
                Thanh toán khi nhận hàng (COD)
              </p>
            </div>
          </li>
          <li className='service__container-item'>
            <i className='fas fa-gem service__container-item-icon'></i>
            <div className='service__container-item-info'>
              <p className='service__container-item-info__title'>Khách hàng VIP</p>
              <p className='service__container-item-info__subtitle'>
                Ưu đãi dành cho khách hàng VIP
              </p>
            </div>
          </li>
          <li className='service__container-item'>
            <i className='fas fa-hand-holding-heart service__container-item-icon'></i>
            <div className='service__container-item-info'>
              <p className='service__container-item-info__title'>Hỗ trợ bảo hành</p>
              <p className='service__container-item-info__subtitle'>
                Đổi sửa đồ tại tất cả các store
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
