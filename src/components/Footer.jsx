import React from "react";
import "./asset/css/footer.scss";
import logo from "./asset/images/Logo-2.png";

export default function Footer() {
  return (
    <footer className='app__footer'>
      <div className='app__footer-content'>
        <p className='app__footer-content__title'>Tổng đài hỗ trợ</p>
        <p className='app__footer-content__text'>Liên hệ đặt hàng 023456789</p>
        <p className='app__footer-content__text'>Thắc mắc đơn hàng 023456789</p>
        <p className='app__footer-content__text'>Góp ý khiếu nại</p>
      </div>
      <div className='app__footer-content'>
        <p className='app__footer-content__title'>Về YOLO</p>
        <p className='app__footer-content__text'>Giới thiệu</p>
        <p className='app__footer-content__text'>Liên hệ</p>
        <p className='app__footer-content__text'>Tuyển dụng</p>
        <p className='app__footer-content__text'>Tin tức</p>
        <p className='app__footer-content__text'>Hệ thống cửa hàng</p>
      </div>
      <div className='app__footer-content'>
        <p className='app__footer-content__title'>Chăm sóc khách hàng</p>
        <p className='app__footer-content__text'>Chính sách đổi trả</p>
        <p className='app__footer-content__text'>Chính sách bảo hành</p>
        <p className='app__footer-content__text'>Chính sách hoàn tiền</p>
      </div>
      <div className='app__footer-content' style={{ textAlign: "center" }}>
        <img src={logo} alt='' className='app__footer-content-img' />
        <p className='app__footer-content__text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quisquam
        </p>
      </div>
    </footer>
  );
}
