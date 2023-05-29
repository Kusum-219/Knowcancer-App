import React, {FC, forwardRef} from 'react';
import {TextInput} from 'react-native-paper';
import useTheme from '@/hooks/useTheme';
import {StyleProp, TextStyle, StyleSheet} from 'react-native';

interface TextInputProps {
  label?: string;
  value?: string;
  handleChange?: (e: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  type?: 'flat' | 'outlined';
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  onSubmitEditing?: (event: any) => void;
  returnKeyType?:
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'default'
    | 'emergency-call'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo';
  ref?: any;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: string;
  iconColor?: string;
  outlineColor?: string;
  multiline?: boolean;
  numberOfLines?: number;
  rightIcon?: string;
  rightOnpress?: () => void;
  roundness?: number;
  primaryColor?: string;
  inputTextColor?: string;
  keyboardType?: string;
  disable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  isProfile?: boolean;
  isFocused?: boolean;
  maxLength?: number;
  rightIconColor?: string;
}

const TextInputComponent: FC<TextInputProps> = forwardRef(
  (
    {
      label,
      isSearch,
      value,
      handleChange,
      placeholder,
      placeholderTextColor,
      type = 'outlined',
      secureTextEntry,
      autoCapitalize = 'none',
      onSubmitEditing,
      returnKeyType = 'default',
      inputStyle,
      leftIcon,
      outlineColor,
      multiline,
      numberOfLines,
      rightIcon,
      rightOnpress,
      roundness,
      primaryColor,
      inputTextColor,
      keyboardType,
      disable,
      onFocus,
      onBlur,
      isProfile,
      isFocused,
      maxLength,
      rightIconColor,
      showDollar,
      crossIcon,
      inputTextFontFamily,
    },
    ref
  ) => {
    const {Colors} = useTheme();
    const left = (
      <TextInput.Icon
        name={leftIcon}
        color={
          value == '' &&
          leftIcon === 'alert-circle-outline' &&
          placeholder !== 'Email' &&
          isProfile
            ? Colors.red
            : Colors.iconColor
        }
      />
    );
    const right = (
      <TextInput.Icon
        name={rightIcon}
        color={rightIconColor || Colors.iconColor}
        onPress={rightOnpress}
      />
    );
    const cross = (
      <TextInput.Icon
        name={crossIcon}
        color={rightIconColor || Colors.iconColor}
        onPress={rightOnpress}
      />
    );
    return (
      <TextInput
        onBlur={onBlur}
        label={label}
        ref={ref}
        mode={type}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || Colors.placeholder}
        value={value}
        onChangeText={handleChange}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        style={[Styles.inputStyle, inputStyle, {opacity: disable ? 0.3 : 1}]}
        left={leftIcon ? left : null}
        right={
          crossIcon && isSearch && value ? cross : rightIcon ? right : null
        }
        outlineColor={outlineColor || Colors.lighterGrey}
        multiline={multiline}
        numberOfLines={numberOfLines || 1}
        onFocus={onFocus}
        keyboardType={keyboardType || 'default'}
        theme={{
          roundness: roundness || 0,
          colors: {
            primary: primaryColor || '',
            background: Colors.dullWhite,
            text: inputTextColor || Colors.inputTextColor,
          },
          fonts: {
            regular: {
              fontFamily: inputTextFontFamily || 'Montserrat-Medium',
          },
          },
        }}
        disabled={disable || false}
        maxLength={maxLength}
        allowFontScaling={false}
      />
    );
  }
);

export default TextInputComponent;

const Styles = StyleSheet.create({
  inputStyle: {fontSize: 16, paddingVertical: 0},
});
