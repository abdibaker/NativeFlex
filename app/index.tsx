import { AntDesign, Feather } from '@expo/vector-icons';
import { Avatar, Button, Divider } from '@rneui/themed';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '~/components/Input';

export default function () {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0000" style="light" />

      <ImageBackground source={require('../assets/loginBackground.png')} className="size-full">
        <View className="px-12">
          <Text className="mb-20 mt-12 text-center text-4xl font-semibold uppercase text-white">
            Welcome
          </Text>
          <Input placeholder="username" className="mb-4">
            <Feather name="user" size={24} color="white" />
          </Input>
          <Input placeholder="password" secureTextEntry>
            <AntDesign name="lock" size={24} color="white" />
          </Input>
          <Link href="/" className="mb-10 mt-1.5 text-right text-sm text-blue-500">
            Forgot password?
          </Link>
          <Button title="LOG IN" radius={8} />
          <View className="mt-8 flex-row items-center justify-between gap-4">
            <Divider color="#c4b5fd" className="flex-grow" />
            <Text className="text-white">OR</Text>
            <Divider color="#c4b5fd" className="flex-grow" />
          </View>
          <View className="mt-8 flex-row justify-evenly">
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
}
