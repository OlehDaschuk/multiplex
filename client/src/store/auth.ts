import { makeAutoObservable } from 'mobx';

export class AuthStore {
  uuid: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  *login() {}
}

export const authStore = new AuthStore();
