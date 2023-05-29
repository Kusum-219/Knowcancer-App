import * as default_dark from './default_dark';
import {Theme} from '@/themes/theme.type';

type Themes = {[key: string]: Partial<Theme>};

export default {
  default_dark,
} as Themes;
