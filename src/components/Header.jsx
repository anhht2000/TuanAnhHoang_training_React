import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../contextAPI/AppProvider";
import "./asset/css/header.scss";
import logo from "./asset/images/Logo-2.png";

export default function Header() {
  const { cart } = useContext(AppContext);
  const [isShow, setIsShow] = useState(false);
  return (
    <header className='app__header'>
      <ul className='app__header-left'>
        <li className='app__header-left__item'>
          <NavLink to='/' activeClassName='active' className='app__header-left__item-link' exact>
            Trang chủ
          </NavLink>
        </li>
        <li className='app__header-left__item'>
          <NavLink
            to='/list-product'
            activeClassName='active'
            className='app__header-left__item-link'
            exact
          >
            Sản phẩm
          </NavLink>
        </li>
        <li className='app__header-left__item'>
          <NavLink to='/sub' activeClassName='active' className='app__header-left__item-link' exact>
            Phụ kiện
          </NavLink>
        </li>
        <li className='app__header-left__item'>
          <NavLink
            to='/contact'
            activeClassName='active'
            className='app__header-left__item-link'
            exact
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>
      <div className='app__header-subleft'>
        <i
          className='fas fa-bars app__header-subleft-icon'
          onClick={() => {
            setIsShow(!isShow);
          }}
        ></i>
        <ul className={isShow ? "app__header-subleftList" : "app__header-subleftList d-none"}>
          <li className='app__header-subleftList__item'>
            <NavLink to='/' className='app__header-subleftList__item-link'>
              Trang chủ
            </NavLink>
          </li>
          <li className='app__header-subleftList__item'>
            <NavLink to='/list-product' className='app__header-subleftList__item-link'>
              Sản phẩm
            </NavLink>
          </li>
          <li className='app__header-subleftList__item'>
            <NavLink to='/sud' className='app__header-subleftList__item-link'>
              Phụ kiện
            </NavLink>
          </li>
          <li className='app__header-subleftList__item'>
            <NavLink to='s/ud' className='app__header-subleftList__item-link'>
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='app__header-center'>
        <Link to='/'>
          <img src={logo} alt='' className='app__header-center-img' />
        </Link>
      </div>
      <ul className='app__header-right'>
        <li className='app__header-right-item'>
          <i className='fas fa-search app__header-right-item-icon'></i>
        </li>
        <li className='app__header-right-item'>
          <NavLink
            to='/list-product'
            activeClassName='active'
            className='app__header-left__item-link'
            exact
          >
            <i className='fas fa-shopping-bag app__header-right-item-icon'>
              <span>{cart}</span>
            </i>
          </NavLink>
        </li>
        <li className='app__header-right-item'>
          <i className='fas fa-user app__header-right-item-icon'></i>
        </li>
      </ul>
      <div className='app__header-subright'>
        <i className='fas fa-search app__header-right-item-icon'></i>
      </div>
    </header>
  );
}
