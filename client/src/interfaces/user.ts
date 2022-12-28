export default interface IUser {
  id: number;
  uuid: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: 'Male' | 'Female' | 'Non-binary';
  date_of_birth: Date;
  email: string;
  password: string;
}
