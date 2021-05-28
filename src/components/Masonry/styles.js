import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  item: {
    // border: "1px solid blue",
    borderRadius: "30px",
    backgroundColor: "blue",
    width: "32%",
    // flex: "0 32%",
    marginBottom: "2%",
    "&:nth-child(3n+1)": {
      order: 1,
    },
    "&:nth-child(3n+2)": {
      order: 2,
    },
    "&:nth-child(3n)": {
      order: 3,
    },

    // textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "space-between",
    // height: "800px",
    "&::before, &::after": {
      content: "",
      flexBasis: "100%",
      width: 0,
      order: 2,
    },
  },
}));
