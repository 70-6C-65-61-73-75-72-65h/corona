import { createContext, useMemo } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { small, large } from "./constants";

export const ChartStyles = createContext();

export default function ChartStylesProvider(props) {
  const theme = useTheme();
  const mediaSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const styleObject = useMemo(
    () => (mediaSmall === false ? large : small),
    [mediaSmall]
  );
  return (
    <ChartStyles.Provider value={styleObject}>
      {props?.children}
    </ChartStyles.Provider>
  );
}
