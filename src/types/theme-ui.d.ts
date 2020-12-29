import { Property } from "csstype"
import { ColorMode as DefaultColorMode } from "theme-ui"

declare module "theme-ui" {
  export interface ColorMode extends DefaultColorMode {
    heading?: Property.Color
    toggleIcon?: Property.Color
  }
}
