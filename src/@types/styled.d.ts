import { defaultTheme } from "@theme/defaultTheme/theme"
import "styled-components"

declare module "styled-components"{
    type ThemeType = typeof defaultTheme

    export interface DefaultTheme extends ThemeType {}
}


