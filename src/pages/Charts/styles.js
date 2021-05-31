import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  chartFetching: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  chartWrapper: { width: "70vw !important", height: "70vh !important" },
  chartContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  // errorContainer: { display: "flex", justifyContent: "flex-end" },
}));
