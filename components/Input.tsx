import { Ionicons } from '@expo/vector-icons';
import { observer, useObservable } from '@legendapp/state/react';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

interface InputProps {
  placeholder?: string;
  className?: string;
  inputStyle?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  [key: string]: any;
}

const Input: React.FC<InputProps> = observer(
  ({
    children,
    placeholder,
    className,
    inputStyle,
    secureTextEntry,
    onChangeText,
    ...otherProps
  }) => {
    const isPasswordVisible = useObservable(false);
    return (
      <View
        className={`flex-row items-center gap-x-2 rounded-lg border border-violet-400 px-3 py-2 ${className}`}>
        {children}
        <TextInput
          placeholder={placeholder || ''}
          className={`flex-grow text-slate-50 placeholder:text-slate-400 ${inputStyle}`}
          secureTextEntry={secureTextEntry && !isPasswordVisible.get()}
          onChangeText={onChangeText}
          {...otherProps}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => isPasswordVisible.toggle()}>
            {isPasswordVisible.get() ? (
              <Ionicons name="eye-outline" size={24} color="white" />
            ) : (
              <Ionicons name="eye-off-outline" size={24} color="white" />
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

export default Input;
