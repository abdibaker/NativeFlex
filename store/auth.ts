import { observable } from '@legendapp/state';
import axios from 'axios';

interface User {
  username: string;
  email: string;
  token: string;
}

export const $user = observable<User | undefined>();
export let isLoggedIn$: boolean;

export async function login(username: string, password: string) {
  const { data } = await axios.post<User>('/login', { username, password });
  $user.set(data);
}

export async function logout() {
  await axios.post('/logout');
  $user.set(undefined);
}

$user.onChange((user) => {
  isLoggedIn$ = Boolean(user);
});
