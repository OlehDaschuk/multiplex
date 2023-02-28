import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../api/film';

import Image from '../components/shared/Image';

const Film: React.FC = () => {
  const { id } = useParams();
  const { data: film, isLoading } = useQuery({
    queryKey: ['film', id],
    queryFn: () => getFilmById(id!),
  });

  useEffect(() => {
    document.title = `${film?.name} - афіша, квитки на фільм і ...`;

    return () => {
      document.title = 'Multiplex';
    };
  }, []);

  return (
    <main className="h-screen bg-primary md:flex pt-[3.15rem] lg:pt-[3.75rem] text-white">
      <div className="w-[300px]">
        <Image className="w-[250px] rounded mx-auto mt-5" src={film?.cover_url} alt="Film image" />
      </div>
      <div className="w-2/3">
        <h1 className="mb-4 text-4xl">{film?.name}</h1>

        <table className="mb-8 border-spacing-x-2">
          <tbody>
            <tr>
              <td>Вік:</td>
              <td>{film?.age}</td>
            </tr>
            <tr>
              <td>Рік:</td>
              <td>{film?.year}</td>
            </tr>
            <tr>
              <td>Оригінальна назва:</td>
              <td>{film?.original_name}</td>
            </tr>
            <tr>
              <td>Режисер:</td>
              <td>{film?.director}</td>
            </tr>
            <tr>
              <td>Дата виходу:</td>
              <td>{new Date(film?.rental_start!).toUTCString()}</td>
            </tr>
            <tr>
              <td>Рейтинг Imdb:</td>
              <td>{film?.rating}</td>
            </tr>
            <tr>
              <td>Мова:</td>
              <td>{film?.language}</td>
            </tr>
            <tr>
              <td>Жанр:</td>
              <td>{film?.genre}</td>
            </tr>
            <tr>
              <td>Тривалість:</td>
              <td>{film?.duration}</td>
            </tr>
            <tr>
              <td>Студія:</td>
              <td>{film?.studio}</td>
            </tr>
            <tr>
              <td>Сценарій:</td>
              <td>{film?.screenwriters}</td>
            </tr>
            <tr>
              <td>У головних ролях:</td>
              <td>{film?.starring}</td>
            </tr>
          </tbody>
        </table>

        <p className="opacity-80">{film?.description}</p>
      </div>
    </main>
  );
};

export default Film;
