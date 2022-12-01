import styles from './Home.module.css';
import React, { useState, useEffect } from 'react';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { getUserByUUID } from '../../api/user';
import { getFilms, getNumOfAvailableFilms } from '../../api/film';

SwiperCore.use([Navigation, Scrollbar, Mousewheel]);

export default function Home() {
  function windowResizeHandler() {
    setwindowWidth(window.innerWidth);
  }

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const {
    data: films,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['films'],
    queryFn: ({ pageParam = { offset: 0, limit: 2 } }) => {
      return getFilms(pageParam.offset, pageParam.limit);
    },
    getNextPageParam: async (lastPage, allPages) => {
      const numOfAvailable = await getNumOfAvailableFilms();
      if (!allPages.at(-1)?.data.length) return;
      // console.log(getNumOfAvailableFilms);

      return allPages.length;
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
    <main className="h-screen bg-orange-900 pt-[3.125rem] lg:pt-[3.75rem]">
      <Swiper
        mousewheel
        slidesPerView={'auto'}
        navigation={windowWidth >= 1024}
        direction={windowWidth >= 1024 ? 'horizontal' : 'vertical'}
        onSwiper={() => fetchNextPage()}
        onReachEnd={(swiper) => {
          console.log(1234);

          fetchNextPage();
        }}
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
                    <a className="hover:underline" href={`/film/${film.id}`}>
                      {film.name}
                    </a>
                  </SwiperSlide>
                );
              })}
            </React.Fragment>
          );
        })}

        {(isFetchingNextPage || isFetching) && (
          <SwiperSlide className="w-full lg:w-96 grid place-content-center">
            <div className={styles['lds-spinner']}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </main>
  );
}
