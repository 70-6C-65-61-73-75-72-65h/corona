import { makeStyles } from "@material-ui/core";
export const small = {
  yAxisOffsetLabel: 36,
  drawerChartNav: makeStyles((theme) => ({
    tabRoot: { minWidth: "100%" },
  })),
  navCLHeight: "60vh",
};
export const large = {
  yAxisOffsetLabel: 48,
  drawerChartNav: null, //makeStyles((theme) => ({})),
  navCLHeight: "10vh",
};
