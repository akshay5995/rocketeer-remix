import * as React from "react";
import type { ColorScheme } from "@mantine/core";

const useColorScheme = (
  initColorScheme: ColorScheme
): [ColorScheme, () => void] => {
  const [colorScheme, setColorScheme] =
    React.useState<ColorScheme>(initColorScheme);

  const toggleColorScheme = React.useCallback(() => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }, [colorScheme]);

  return [colorScheme, toggleColorScheme];
};

export { useColorScheme };
