import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  chartFetching: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chartWrapper: { width: "70vw !important", height: "70vh !important" },
  chartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
}));
