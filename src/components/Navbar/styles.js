import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  //
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // центррование для каждого елемента
    alignItems: "center",
    marginBottom: theme.spacing(4),

    position: "relative",

    backgroundColor: fade(theme.palette.primary.main, 1),
    // background: `url(${CoronaBack}) no-repeat center center`,
  },
  brandContainer: {
    // flexGrow: 0.5,
    display: "flex",
    // центррование для каждого елемента из блока брэнда
    alignItems: "center",
    margin: theme.spacing(0, 1),
  },
  image: {
    margin: theme.spacing(0, 1),
    height: "80px",
  },

  tabsRoot: {
    flexGrow: 1,
    display: "flex",
    margin: "20px",
    // "& .MuiTabs-indicator": {
    //   width: "0px !important",
    // },
  },
  tabs: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },

  userName: {
    margin: theme.spacing(0, 1),
    alignItems: "center",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
  },
  profile: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  // toolbar: {
  //   display: "flex",
  //   alignItems: "center",
  //   padding: "0",
  //   margin: theme.spacing(0, 1),
  // },
}));
