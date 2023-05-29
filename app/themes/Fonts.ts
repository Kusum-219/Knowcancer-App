/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables, ThemeFonts } from './theme.type';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }: ThemeVariables): ThemeFonts {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textSmallBlack: {
      fontSize: FontSize.small,
      color: Colors.storybookTextColor,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    bold: { fontWeight: 'bold' },
  });
}

// export const fontConfigPopins = {
//   bold: {
//     fontFamily: 'P',
//   },
//   boldOblique: {
//     fontFamily: 'Roboto-BoldItalic',
//   },
//   regular: {
//     fontFamily: 'Roboto-Regular',
//   },
//   regularOblique: {
//     fontFamily: 'Roboto-ThinItalic',
//   },
//   semibold: {
//     fontFamily: 'Roboto-Medium',
//   },
//   semiboldOblique: {
//     fontFamily: 'Roboto-MediumItalic',
//   },
//   light: {
//     fontFamily: 'Roboto-Light',
//   },
//   lightOblique: {
//     fontFamily: 'Roboto-BlackItalic',
//   },
//   thin: {
//     fontFamily: 'Roboto-Thin',
//   },
//   thinOblique: {
//     fontFamily: 'Roboto-ThinItalic',
//   },
// };