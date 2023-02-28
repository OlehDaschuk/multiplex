import api from '.';

import { IFilm } from '../types/film';

export const getFilms = (offset: number, limit: number = 2): Promise<{ data: IFilm[] }> => {
  return api.get(`/films-in-rent?page=${offset}&limit=${limit}`);
};
export const getNumOfAvailableFilms = () => api.get('/number-of-available-films');

export const getFilmById = (filmId: number | string): Promise<IFilm> => {
  return api.get(`/films/${filmId}`).then((res) => res.data);
};
// export const createFilm = ({ id, ...updatedData }: IFilm): Promise<IFilm> => {
//   return api.post(`/user/${id}`, updatedData);
// };
// export const updateFilm = ({ id, ...updatedData }: IFilm): Promise<IFilm> => {
//   return api.put(`/user/${id}`, updatedData);
// };
// export const deleteFilm = (id: number): Promise<IFilm> => api.delete(`/user/${id}`);
