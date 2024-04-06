import { Client, Account } from 'react-native-appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('661106f9077966d28e4d')
  .setPlatform('com.nativeflix.app');

const account = new Account(client);

export const appwrite = {
  client,
  account,
};
