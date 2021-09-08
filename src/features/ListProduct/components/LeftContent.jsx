import React from "react";

export default function LeftContent() {
  return (
    <div className='app__main__left'>
      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Danh mục sản phẩm</h3>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check1' />
          <label for='check1'>Áo thun</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check2' />
          <label for='check2'>Áo somi</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check3' />
          <label for='check3'>Quần jean</label>
        </li>
      </ul>

      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Màu sắc</h3>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check1' />
          <label for='check1'>Trắng </label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check2' />
          <label for='check2'>Hồng</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check3' />
          <label for='check3'>Vàng</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check4' />
          <label for='check4'>Cam</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check5' />
          <label for='check5'>Đen</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check6' />
          <label for='check6'>Xanh dương</label>
        </li>
      </ul>
      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Kích cỡ</h3>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check1' />
          <label for='check1'>S</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check2' />
          <label for='check2'>M</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check3' />
          <label for='check3'>L</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check4' />
          <label for='check4'>XL</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='checkbox' id='check5' />
          <label for='check5'>XXL</label>
        </li>
      </ul>
      <a href='/' className='app__main__left-link'>
        Xóa bộ lọc
      </a>
    </div>
  );
}
