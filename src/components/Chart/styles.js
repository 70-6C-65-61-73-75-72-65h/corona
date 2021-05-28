import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
  },
  discardButton: {
    borderRadius: "0px !important",
  },
  indicator: {
    left: "0px",
    width: "10px",
  },
  // icons: { 
  //   '& .MuiSvgIcon-root > path': {
  //     fill:'black'
  //   }
  // }
  // icons: {backgroundColor:"green"}
   
}));

export const iconStyle = makeStyles((theme) => ({

  icons: { 
    '& .MuiSvgIcon-root > path': {
      fill: props => props.color
    }
  }
}));
