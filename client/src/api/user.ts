import api from '.';

import IStaff from '../types/staff';
import IUser from '../types/user';

export const authUser = (email: string, password: string): Promise<IUser | IStaff> =>
  api.post(`/login`, { email, password });
export const createUser = ({ id, ...updatedData }: IUser): Promise<IUser> =>
  api.post(`/user/${id}`, updatedData);
export const updateUser = ({ id, ...updatedData }: IUser): Promise<IUser> =>
  api.put(`/user/${id}`, updatedData);
export const deleteUser = (id: number) => api.delete(`/user/${id}`);

export const getUserByUUID = (uuid: string): Promise<IUser | IStaff> => api.get(`/user/${uuid}`);

// export const getTicket = (): Promise<IFilms> => api.get(`/films`);
// export const createTicket = ({ id, ...updatedData }: IFilms): Promise<IFilms> =>
//   api.post(`/user/${id}`, updatedData);
// export const updateTicket = ({ id, ...updatedData }: IFilms): Promise<IFilms> =>
//   api.put(`/user/${id}`, updatedData);
// export const deleteTicket = (id: number) => api.delete(`/user/${id}`);
