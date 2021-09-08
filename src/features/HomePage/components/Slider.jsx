import React from "react";
import "../asset/css/slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../asset/images/slider/slide_1.png";
import slide3 from "../asset/images/slider/slide_3.png";
import slide2 from "../asset/images/slider/slide_2.png";

export default function SliderContainer() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className='slider'>
            <div className='slider__left'>
              <h2 className='slider__left-title'>Polo nữ Pima cao cấp</h2>
              <p className='slider__left-text'>
                Nhắc đến sự đăng cấp không thể không nhắc đến dòng vài pima Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Adipisci aut sequi nam eum odio dolorum molestiae
                eius possimus, animi repellat? Rem sunt quisquam dolores quae quis debitis illum
                enim sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus
                rem unde deleniti.
              </p>
              <div className='slider__left-detail'>
                <a href='/' className='slider__left-detail-link'>
                  Xem chi tiết
                </a>
              </div>
              {/* <div className='slider__left-pagination'>
                <span className='slider__left-pagination-prev'>
                  <i className='fas fa-chevron-left'></i>
                </span>
                <span className='slider__left-pagination-center'>1/3</span>
                <span className='slider__left-pagination-next'>
                  <i className='fas fa-chevron-right'></i>
                </span>
              </div> */}
            </div>
            <div className='slider__right'>
              <div className='slider__right-eslip'></div>
              <img src={slide1} alt='' className='slider__right-img' />
            </div>
          </div>
        </div>
        <div>
          <div className='slider'>
            <div className='slider__left'>
              <h2 className='slider__left-title'>Polo nữ Pima cao cấp</h2>
              <p className='slider__left-text'>
                Nhắc đến sự đăng cấp không thể không nhắc đến dòng vài pima Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Adipisci aut sequi nam eum odio dolorum molestiae
                eius possimus, animi repellat? Rem sunt quisquam dolores quae quis debitis illum
                enim sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus
                rem unde deleniti.
              </p>
              <div className='slider__left-detail'>
                <a href='/' className='slider__left-detail-link'>
                  Xem chi tiết
                </a>
              </div>
              {/* <div className='slider__left-pagination'>
                <span className='slider__left-pagination-prev'>
                  <i className='fas fa-chevron-left'></i>
                </span>
                <span className='slider__left-pagination-center'>1/3</span>
                <span className='slider__left-pagination-next'>
                  <i className='fas fa-chevron-right'></i>
                </span>
              </div> */}
            </div>
            <div className='slider__right'>
              <div className='slider__right-eslip'></div>
              <img src={slide2} alt='' className='slider__right-img' />
            </div>
          </div>
        </div>
        <div>
          <div className='slider'>
            <div className='slider__left'>
              <h2 className='slider__left-title'>Polo nữ Pima cao cấp</h2>
              <p className='slider__left-text'>
                Nhắc đến sự đăng cấp không thể không nhắc đến dòng vài pima Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Adipisci aut sequi nam eum odio dolorum molestiae
                eius possimus, animi repellat? Rem sunt quisquam dolores quae quis debitis illum
                enim sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus
                rem unde deleniti.
              </p>
              <div className='slider__left-detail'>
                <a href='/' className='slider__left-detail-link'>
                  Xem chi tiết
                </a>
              </div>
              {/* <div className='slider__left-pagination'>
                <span className='slider__left-pagination-prev'>
                  <i className='fas fa-chevron-left'></i>
                </span>
                <span className='slider__left-pagination-center'>1/3</span>
                <span className='slider__left-pagination-next'>
                  <i className='fas fa-chevron-right'></i>
                </span>
              </div> */}
            </div>
            <div className='slider__right'>
              <div className='slider__right-eslip'></div>
              <img src={slide3} alt='' className='slider__right-img' />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
