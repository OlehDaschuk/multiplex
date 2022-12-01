import api from '.';

import IFilms from '../interfaces/film';

export const getFilms = (offset: number, limit: number = 2): Promise<{ data: IFilms[] }> => {
  return api.get(`/films-in-rent?page=${offset}&limit=${limit}`);
};
export const getNumOfAvailableFilms = (): Promise<{ number: number }> =>
  api.get('/number-of-available-films');

export const createFilms = ({ id, ...updatedData }: IFilms): Promise<IFilms> =>
  api.post(`/user/${id}`, updatedData);
export const updateFilms = ({ id, ...updatedData }: IFilms): Promise<IFilms> =>
  api.put(`/user/${id}`, updatedData);
export const deleteFilms = (id: number): Promise<IFilms> => api.delete(`/user/${id}`);
