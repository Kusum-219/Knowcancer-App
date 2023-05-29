import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import merge from 'deepmerge';

const userDefinedValues = {
  roundness: 2,
};

const generateFinalTheme = (theme: any) => ({ ...theme, ...userDefinedValues });

const CombinedDefaultTheme = generateFinalTheme(merge(PaperDefaultTheme, NavigationDefaultTheme));

const CombinedDarkTheme = generateFinalTheme(merge(PaperDarkTheme, NavigationDarkTheme));

export { CombinedDefaultTheme, CombinedDarkTheme };
