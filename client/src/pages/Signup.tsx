import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RadioGroup } from '@headlessui/react';

interface Inputs {
  first_name: string;
  last_name: string;

  gender: 'Male' | 'Female' | 'Non-binary';
  date_of_birth: Date;

  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { handleSubmit, register } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0">
        <Link to="/">Home</Link>
      </header>

      <main className="w-screen h-screen flex justify-center items-center bg-red-300">
        <form
          className="bg-red-900 rounded-lg w-96 overflow-hidden p-4 border-2"
          onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Ваше ім'я..."
            className="block rounded my-1"
            {...register('first_name', { required: true })}
          />
          <input
            type="text"
            placeholder="Ваше прізвище..."
            className="block rounded my-1"
            {...register('last_name', { required: true })}
          />

          <fieldset className="flex flex-col">
            <legend>Ваш гендер:</legend>
            <label>
              <input type="radio" {...register('gender', { required: true })} value="Male" />
              &nbsp; Чоловік
            </label>
            <label>
              <input type="radio" {...register('gender', { required: true })} value="Female" />
              &nbsp; Жінка
            </label>
            <label>
              <input type="radio" {...register('gender', { required: true })} value="Non-binary" />
              &nbsp; Інше
            </label>
          </fieldset>

          <input className="my-2" type="date" {...register('date_of_birth', { required: true })} />

          <input
            type="email"
            placeholder="Пошта..."
            className="block rounded my-1"
            {...register('email', { required: true })}
          />
          <input
            type="password"
            placeholder="Пароль..."
            className="block rounded my-1"
            {...register('password', { required: true })}
          />

          <button type="submit" className="bg-white border px-1 rounded block">
            Зареєструватися
          </button>
        </form>
      </main>
    </>
  );
};
export default Signup;
