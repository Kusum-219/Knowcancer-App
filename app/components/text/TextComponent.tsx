import React, { FC } from 'react';

import {
  Caption as PaperCaption,
  Headline as PaperHeadline,
  Paragraph as PaperParagraph,
  Subheading as PaperSubheading,
  Text as PaperText,
  Title as PaperTitle,
} from 'react-native-paper';

import { TextStyle } from 'react-native';

interface TextProps {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

const Caption: FC<TextProps> = ({ children, style }) => (
  <PaperCaption style={style}>{children}</PaperCaption>
);
const Headline: FC<TextProps> = ({ children, style }) => (
  <PaperHeadline style={style}>{children}</PaperHeadline>
);
const Paragraph: FC<TextProps> = ({ children, style }) => (
  <PaperParagraph style={style}>{children}</PaperParagraph>
);
const Subheading: FC<TextProps> = ({ children, style }) => (
  <PaperSubheading style={style}>{children}</PaperSubheading>
);
const Text: FC<TextProps> = ({ children, style }) => (
  <PaperText style={style}>{children}</PaperText>
);
const Title: FC<TextProps> = ({ children, style }) => (
  <PaperTitle style={style}>{children}</PaperTitle>
);
const TextComponent = { Caption, Headline, Paragraph, Subheading, Text, Title };

export default TextComponent;
