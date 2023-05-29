import React, { FC } from 'react';
import { Button } from 'react-native-paper';
import { TextStyle, ViewStyle } from 'react-native';
import useButtonStyles from './Button.styles';

interface ButtonProps {
  title: string;
  handlePress: () => void;
  type?: 'text' | 'outlined' | 'contained' | undefined;
  labelStyle?: TextStyle;
  upperCase?: boolean;
  compact?: boolean;
  buttonStyle?: ViewStyle;
}

const ButtonComponent: FC<ButtonProps> = ({
  title,
  handlePress,
  type = 'contained',
  labelStyle,
  upperCase = false,
  compact = false,
  buttonStyle,
}) => {
  const S = useButtonStyles();
  return (
    <Button
      mode={type}
      onPress={handlePress}
      labelStyle={[S.label, labelStyle]}
      compact={compact}
      uppercase={upperCase}
      style={buttonStyle}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;
