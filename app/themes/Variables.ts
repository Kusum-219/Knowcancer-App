/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeColors, ThemeFontSize, ThemeMetricsSizes, ThemeNavigationColors } from './theme.type';

export const Palette: ThemeColors = {
  black: '#1d1d1d',
  white: '#ffffff',
  offWhite: '#e6e6e6',
  orange: '#E61323',
  purple:'#936CAB',
  orangeDarker: '#EB9918',
  // lightGrey: '#999999',
  lighterGrey: '#CDD4DA',
  red: '#a70101',
  deepPurple: '#5D2555',
  skyBlue: '#67CBFF',
  grey: '#747474',
  darkGrey: '#DBDBDB',
  gray: '#D9D9D9',
  inputGray: '#999999',
  lightGrey: '#938F99',
};
/**
 * Colors
 */
export const Colors: ThemeColors = {
  ...Palette,
  transparent: 'rgba(0, 0, 0, 0)',
  background: Palette.white,
  primary: Palette.purple,
  secondary: Palette.orange,
  primaryDarker: Palette.orangeDarker,
  line: Palette.offWhite,
  text: Palette.white,
  dim: Palette.lightGrey,
  error: Palette.red,
  storybookDarkBg: Palette.black,
  storybookTextColor: Palette.black,
  placeholder: Palette.lightGrey,
  divider: Palette.darkGrey,
  // inputTextColor: Palette.inputGray,
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: Colors.background,
};

/**
 * FontSize
 */
export const FontSize: ThemeFontSize = {
  tiny: 12,
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const xxt = 2; // 2
const xt = xxt * 2; // 4
const tiny = 5; // 5
const xxs = xxt * 3; // 6
const xs = xxt * 4; // 8
const small = tiny * 2; // 10
const xxxm = xxt * 6; // 12
const xxm = xxt * 7; // 14
const xm = xxt * 8; // 16
const m = xxt * 9; // 18
const regular = tiny * 4; // 20
const xxxr = xxt * 11; // 22
const xxr = xxt * 12; // 24
const xr = xxt * 13; // 26
const r = xxt * 14; // 28
const large = regular * 1.5; // 30
const xlarge = regular * 2; //40
const xxlarge = regular * 2.5; //50
export const MetricsSizes: ThemeMetricsSizes = {
  xxt,
  xt,
  tiny,
  xxs,
  xs,
  small,
  xxxm,
  xxm,
  xm,
  m,
  regular,
  xxxr,
  xxr,
  xr,
  r,
  large,
  xlarge,
  xxlarge,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  Palette,
};
