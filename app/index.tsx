import { AntDesign, Fontisto } from '@expo/vector-icons';
import { observer, useObservable } from '@legendapp/state/react';
import { Avatar, Button, Divider } from '@rneui/themed';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '~/components/Input';
import { login } from '~/store/auth';

export default observer(() => {
  const credentials = useObservable({ username: '', password: '' });
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0000" style="light" />

      <ImageBackground source={require('../assets/loginBackground.png')} className="size-full">
        <View className="px-12">
          <Text className="mt-12 mb-20 text-4xl font-semibold text-center text-white uppercase">
            Welcome
          </Text>
          <Input placeholder="email" className="mb-4">
            <Fontisto name="email" size={24} color="#c4b5fd" />
          </Input>
          <Input placeholder="password" secureTextEntry>
            <AntDesign name="lock" size={24} color="#c4b5fd" />
          </Input>
          <Link href="/" className="mb-10 mt-1.5 text-right text-sm text-blue-500">
            Forgot password?
          </Link>
          <Button title="LOG IN" radius={8} onPress={login} />
          <View className="flex-row items-center justify-between gap-4 mt-8">
            <Divider color="#c4b5fd" className="flex-grow" />
            <Text className="text-white">OR</Text>
            <Divider color="#c4b5fd" className="flex-grow" />
          </View>
          <View className="flex-row mt-8 justify-evenly">
            <Avatar
              containerStyle={{ backgroundColor: '#6d28d9' }}
              size={48}
              rounded
              icon={{
                name: 'facebook-f',
                type: 'font-awesome',
                size: 24,
              }}
            />
            <Avatar
              containerStyle={{ backgroundColor: '#6d28d9' }}
              size={48}
              rounded
              icon={{
                name: 'google',
                type: 'font-awesome',
                size: 24,
              }}
            />
            <Avatar
              containerStyle={{ backgroundColor: '#6d28d9' }}
              size={48}
              rounded
              icon={{
                name: 'twitter',
                type: 'font-awesome',
                size: 24,
              }}
            />
          </View>
          <View>
            <Text className="mt-10 text-center text-white">
              Don't have an account?{' '}
              <Link href="/" className="text-blue-500">
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
});
