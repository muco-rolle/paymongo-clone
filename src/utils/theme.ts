import { DefaultTheme } from 'styled-components';
import { palette } from 'theme/palette';

interface Theme {
    theme: DefaultTheme;
}

export const color = (colorName: keyof typeof palette) => (props: Theme) =>
    props.theme.palette[colorName] || colorName;

export const size = (size: number): string => `${size * 4}px`;
