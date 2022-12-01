import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getUser } from '../api/user';

import logo from '../assets/icons/logo.svg';
import loginIcon from '../assets/icons/ava_temp1.svg';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/menu_close.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="z-50 bg-orange-900 h-[3.125rem] lg:h-[3.75rem] border-zinc-900	border-b-2 fixed top-0 inset-x-0 flex items-center justify-between flex-row-reverse lg:flex-row">
        <Link to="/">
          <img className="h-[3.125rem] lg:h-[3.75rem]" src={logo} alt="logo" />
        </Link>
        <img onClick={() => setIsMenuOpen(true)} src={menuIcon} alt="menu icon" />
      </header>

      <div
        className={`${
          isMenuOpen ? 'left-0  lg:right-0' : '-left-full lg:-right-full'
        } lg:left-auto z-50 fixed h-screen top-0 bottom-0 w-full sm:w-1/2 lg:w-1/3 p-8 border-zinc-900 sm:border-r-4 lg:border-r-0 lg:border-l-4 bg-orange-900 transition-[left] lg:transition-[right]`}>
        <div className="flexa lg:flex-row-reverse">
          <img onClick={() => setIsMenuOpen(false)} src={closeIcon} alt="close icon" />
        </div>

        <div className="flex justify-center">
          <img src={logo} alt="logo icon" />
        </div>

        <menu className="text-white flex flex-col gap-4 text-xl [&>li>a:hover]:underline">
          <li>
            <NavLink
              to="/"
              className=""
              style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}>
              Зараз у кіно
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cinemas"
              className=""
              style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}>
              Кінотеатри
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="text-yellow-300"
              style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}>
              Купити попкорн онлайн
            </NavLink>
          </li>
        </menu>

        <p className="mt-6 text-xs">ОСОБИСТИЙ КАБІНЕТ</p>

        <Link
          to="/login"
          className="mt-4 p-1 pr-4 bg-red-900 rounded-md border inline-block border-black text-white hover:underline">
          <img src={loginIcon} alt="login icon" className="inline" />
          Увійти
        </Link>
      </div>
    </>
  );
}
