import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextAPI/AppProvider";

export default function LeftContent({ isShow, handle }) {
  const { handleFilter, handleSetProduct } = useContext(AppContext);
  const [filter, setFilter] = useState({});
  useEffect(() => {
    return () => {
      handleSetProduct();
    };
  }, []);
  const handleOnchange = (e) => {
    setFilter((prevState) => {
      return { ...filter, [e.target.name]: e.target.value };
    });
    // handleFilter({ ...filter, [e.target.name]: e.target.value });
    setFilter((prevState) => {
      handleFilter(prevState);
      return prevState;
    });
  };
  const handleClear = () => {
    setFilter((prevState) => {
      return {};
    });
    // handleFilter(null);
    setFilter((prevState) => {
      handleFilter(prevState);
      return prevState;
    });
  };
  return (
    <div className={isShow ? "app__main__left" : "app__main__left isShow"}>
      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Danh mục sản phẩm</h3>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check1'
            name='shape'
            value='thun'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check1'>Áo thun</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check2'
            name='shape'
            value='somi'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check2'>Áo somi</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check3'
            name='shape'
            value='jean'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check3'>Quần jean</label>
        </li>
      </ul>

      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Màu sắc</h3>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check1'
            name='color'
            value='white'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check1'>Trắng </label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check2'
            value='pink'
            name='color'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check2'>Hồng</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check3'
            name='color'
            value='yellow'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check3'>Vàng</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            value='orange'
            id='check4'
            name='color'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check4'>Cam</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check5'
            value='black'
            name='color'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check5'>Đen</label>
        </li>
        <li className='app__main__left-list__item'>
          <input
            type='radio'
            id='check6'
            name='color'
            value='blue'
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
          <label htmlFor='check6'>Xanh dương</label>
        </li>
      </ul>
      <ul className='app__main__left-list'>
        <h3 className='app__main__left-list__title'>Kích cỡ</h3>
        <li className='app__main__left-list__item'>
          <input type='radio' id='check1' name='size' />
          <label htmlFor='check1'>S</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='radio' id='check2' name='size' />
          <label htmlFor='check2'>M</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='radio' id='check3' name='size' />
          <label htmlFor='check3'>L</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='radio' id='check4' name='size' />
          <label htmlFor='check4'>XL</label>
        </li>
        <li className='app__main__left-list__item'>
          <input type='radio' id='check5' name='size' />
          <label htmlFor='check5'>XXL</label>
        </li>
      </ul>
      <span className='app__main__left-link' onClick={handleClear}>
        Xóa bộ lọc
      </span>
    </div>
  );
}
