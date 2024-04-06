import { observable } from '@legendapp/state';
import axios from 'axios';

import { appwrite } from '~/appwrite';

interface User {
  username: string;
  email: string;
  token: string;
}

export const $user = observable<User | undefined>();
export let isLoggedIn$: boolean;

export async function login() {
  console.log('start');
  try {
    const user = await appwrite.account.create('1', 'abdibaker1@gmail.com', 'Heroally1');
    console.log('🚀 ~ login ~ user:', user);
  } catch (error) {
    console.log(error);
  }
  // $user.set(user);
}

export async function logout() {
  await axios.post('/logout');
  $user.set(undefined);
}

$user.onChange((user) => {
  isLoggedIn$ = Boolean(user);
});
