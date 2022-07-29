import type { ColorScheme, MantineThemeOverride } from "@mantine/core";

const themeGenerator = (colorScheme: ColorScheme): MantineThemeOverride => ({
  colorScheme,
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  headings: { fontFamily: "Greycliff CF, sans-serif" },
  primaryShade: { light: 9 },
});

export { themeGenerator };
