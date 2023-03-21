import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
type Color = {
  main: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// Typescript module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    name: string;
  }
  interface Palette {
    neutral: {
      pureBlack: string;
      pureWhite: string;
    };
    alert: {
      error: Color;
      acceptance: Color;
    };
    brand: {
      blue: Color;
      violet: Color;
      lightBlue: Color;
      grey: Color & { 50: string };
    };
  }

  interface ThemeOptions {
    // name is needed for theme switcher
    name?: string;
  }

  interface TypographyOptions {
    fontWeightExtraBold?: number;
  }

  interface PaletteOptions {
    neutral?: {
      pureBlack?: string;
      pureWhite?: string;
    };
    alert?: {
      error?: Partial<Color>;
      acceptance?: Partial<Color>;
    };
    brand?: {
      blue?: Partial<Color>;
      violet?: Partial<Color>;
      lightBlue: Partial<Color>;
      grey?: Partial<Color & { 50: string }>;
    };
  }
  interface TypographyVariants {
    xlh1: TypographyStyleOptions;
    xlh2: TypographyStyleOptions;
    xlh3: TypographyStyleOptions;
    xlh4: TypographyStyleOptions;
    button1: TypographyStyleOptions;
    button2: TypographyStyleOptions;
    navLink: TypographyStyleOptions;
    link: TypographyStyleOptions;
    input: TypographyStyleOptions;
    formErrorMessage: TypographyStyleOptions;
    eyebrow1: TypographyStyleOptions;
    eyebrow2: TypographyStyleOptions;
    subtitleLarge: TypographyStyleOptions;
    bodyXl: TypographyStyleOptions;
    bodyLarge: TypographyStyleOptions;
    rowTitle: TypographyStyleOptions;
    subRowTitle: TypographyStyleOptions;
    item: TypographyStyleOptions;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xlh1?: TypographyStyleOptions;
    xlh2?: TypographyStyleOptions;
    xlh3?: TypographyStyleOptions;
    xlh4?: TypographyStyleOptions;
    button1?: TypographyStyleOptions;
    button2?: TypographyStyleOptions;
    navLink?: TypographyStyleOptions;
    link?: TypographyStyleOptions;
    input?: TypographyStyleOptions;
    formErrorMessage?: TypographyStyleOptions;
    eyebrow1?: TypographyStyleOptions;
    eyebrow2?: TypographyStyleOptions;
    subtitleLarge?: TypographyStyleOptions;
    bodyXl?: TypographyStyleOptions;
    bodyLarge?: TypographyStyleOptions;
    rowTitle?: TypographyStyleOptions;
    subRowTitle?: TypographyStyleOptions;
    item?: TypographyStyleOptions;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xlh1: true;
    xlh2: true;
    xlh3: true;
    xlh4: true;
    button1: true;
    button2: true;
    navLink: true;
    link: true;
    input: true;
    formErrorMessage: true;
    eyebrow1: true;
    eyebrow2: true;
    subtitleLarge: true;
    bodyXl: true;
    bodyLarge: true;
    rowTitle: true;
    subRowTitle: true;
    item: true;
    button: false;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    fontWeightExtraBold: number;
  }
}
