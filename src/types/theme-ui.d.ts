import { Property } from "csstype"
import {
  ColorMode as DefaultColorMode,
  Theme as DefaultTheme,
  ThemeUIStyleObject,
  ThemeUIStyleObject,
} from "theme-ui"

declare module "theme-ui" {
  export interface ColorMode extends DefaultColorMode {
    heading?: Property.Color
    // toggleIcon?: Property.Color
  }

  export interface Theme extends DefaultTheme {
    copyButton?: ThemeUIStyleObject
    dividers?: ThemeUIStyleObject
  }
}
