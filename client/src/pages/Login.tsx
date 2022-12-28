import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { authUser } from '../api/user';

import logo from '../assets/icons/logo.svg';
import photo from '../assets/imgs/lk_login_img_new.png';

interface IFormData {
  email: string;
  password: string;
  isSafe: boolean;
}

const Login: React.FC = () => {
  const { register, handleSubmit, watch, formState } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const user = await authUser(data.email, data.password);

      if (data.isSafe) {
        localStorage.setItem('uuid', user.uuid);
      }

      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    document.title = 'MULTIPLEX - login';

    return () => {
      document.title = 'Multiplex';
    };
  }, []);

  return (
    <div className="lg:flex">
      <div className="p-5 w-full h-screen flex flex-col items-center justify-between">
        <div className="">
          <img className="mb-6 mx-auto" src={logo} alt="logo" />

          <p className="text-center">Вхід до особистого кабінету</p>
          <p>Тут всі ваші замовлення та особиста інформація</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <input
            {...register('email')}
            required
            className=""
            type="email"
            placeholder="Введіть пошту..."
          />
          <input
            {...register('password')}
            required
            className=""
            type="password"
            placeholder="Введіть пароль..."
          />

          <label htmlFor="isSafe">
            <input type="radio" {...register('isSafe')} id="isSafe" /> Запам'ятайти мене.
          </label>

          <button
            className="mt-4 border-black border-2 rounded-lg transition-colors duration-500 hover:bg-red-800"
            type="submit">
            Зареєструватися
          </button>
        </form>

        <div>
          <p className="text-sm mb-2 text-center hover:underline">
            Не маєте акаунт? <Link to="/signup">Створити.</Link>
          </p>
          <p className="text-xl">
            Повернутись на сайт&nbsp;
            <Link to="/" className="text-red-900 hover:font-bold">
              Multiplex
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full h-screen bg-black bg-gradient-to-b from-[rgb(17,24,39)] p-20 flex flex-col items-center justify-between">
        <img className="w-full" src={photo} alt="" />

        <div className="text-white">
          <p className="text-3xl mb-4">Не потрібно завантажувати або друкувати!</p>
          <p className="">
            Квитки вже у Вашому кабінеті - просто авторизуйтесь зараз і покажіть QR-код при вході в
            кінозал.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
