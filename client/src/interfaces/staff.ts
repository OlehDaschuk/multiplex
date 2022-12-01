import IUser from './user';

export default interface IStaff extends IUser {
  role: string;
}
