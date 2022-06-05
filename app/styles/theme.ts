import type { MantineThemeOverride } from "@mantine/core";

const themeGenerator = (
  colorScheme: "light" | "dark" = "dark"
): MantineThemeOverride => ({
  colorScheme,
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  headings: { fontFamily: "Greycliff CF, sans-serif" },
});

export { themeGenerator };
