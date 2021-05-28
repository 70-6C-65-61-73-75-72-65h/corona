import React, { useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import { AppBar, Tab, Tabs } from "@material-ui/core";
import serviceBrandPic from "../../assets/brandImg.png";
import useStyles from "./styles";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [tabIndex, setTabIndex] = useState(false);
  const handleChangeTabs = (e, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={serviceBrandPic} alt="icon" />
        {/* {icon} */}
      </div>
      <Tabs
        component="nav"
        value={tabIndex}
        onChange={handleChangeTabs}
        className={classes.tabRoot}
      >
        <Tab
          onClick={() => history.push("/about", { from: location.pathname })}
          className={classes.tabs}
          variant="h5"
          align="center"
          label={"About"}
          {...a11yProps(0)}
        />
        <Tab
          onClick={() => history.push("/charts", { from: location.pathname })}
          className={classes.tabs}
          variant="h5"
          align="center"
          label={"Charts"}
          {...a11yProps(1)}
        />
        <Tab
          onClick={() => history.push("/articles", { from: location.pathname })}
          className={classes.tabs}
          variant="h5"
          align="center"
          label={"Articles"}
          {...a11yProps(2)}
        />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
