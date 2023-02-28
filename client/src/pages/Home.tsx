import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Scrollbar, Mousewheel]);

import Loader from '../components/shared/Loader/Loader';

// import { getUserByUUID } from '../api/user';
import { getFilms, getNumOfAvailableFilms } from '../api/film';
import { IFilm } from '../types/film';

export default function Home() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const windowResizeHandler = useCallback(() => setwindowWidth(window.innerWidth), []);
  const { data: numOfAvailableFilms } = useQuery({
    queryKey: ['numOfAvailableFilms'],
    queryFn: getNumOfAvailableFilms,
  });

  const {
    data: films,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['films'],
    queryFn: ({ pageParam = { offset: 0, limit: 4 } }) => {
      return getFilms(pageParam.offset, pageParam.limit);
    },
    getNextPageParam: (lastPage, allPages) => {
      const numOfCurentFilms = allPages.reduce((acc, v) => {
        return [...acc, ...v.data];
      }, [] as IFilm[]).length;

      if (numOfCurentFilms >= +numOfAvailableFilms?.data.count) return;

      return { offset: numOfCurentFilms, limit: 2 };
    },
  });

  useEffect(() => {
    document.title = 'Multiplex - home';
    window.addEventListener('resize', windowResizeHandler);

    return () => {
      document.title = 'Multiplex';
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return (
    <main className="h-screen bg-primary pt-[3.125rem] lg:pt-[3.75rem]">
      <Swiper
        mousewheel
        slidesPerView={'auto'}
        navigation={windowWidth >= 1024}
        direction={windowWidth >= 1024 ? 'horizontal' : 'vertical'}
        onReachEnd={() => hasNextPage && fetchNextPage()}
        className="h-full">
        {films?.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.data.map((film) => {
                return (
                  <SwiperSlide
                    className={`text-xl text-white font-bold w-full lg:w-96 pb-12 h-2/3 lg:h-full flex flex-col-reverse items-center bg-cover bg-center bg-no-repeat`}
                    style={{ backgroundImage: `url(${film.cover_url})` }}
                    key={film.id}>
                    <a className="hover:underline" href={`/movie/${film.id}`}>
                      {film.name}
                    </a>
                  </SwiperSlide>
                );
              })}
            </React.Fragment>
          );
        })}

        {isFetchingNextPage || isFetching ? (
          <SwiperSlide className="w-full lg:w-96 grid place-content-center">
            <Loader />
          </SwiperSlide>
        ) : (
          <SwiperSlide className="bg-white w-full lg:w-96 grid place-content-center">
            <span>Це всі доступні фільми...</span>
          </SwiperSlide>
        )}
      </Swiper>
    </main>
  );
}
