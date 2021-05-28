import {
  Container,
  Button,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormControl,
  CircularProgress,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { officialCountriesEntries } from "../../constants/countries";

import { vaccine, cases, deaths, recovered } from "../../constants/virusInfo"; // keys to Lines
import { setSelectedCountry } from "../../redux/actions/virusInfo.actions";

import useStyles, {iconStyle} from "./styles";

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

export default function ChartNavigation({
  toogleChartKey,
  lineKeys,
  selectedCountry,
}) {
  // TODO delete
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState(false);
  const handleChangeTabs = (e, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <FormControl
      component="nav"
      style={{
        // flexGrow: 1,
        // alignSelf: "flex-end",
        // alignContent: "flex-end",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        width: "250px",
        // border: "1px solid red",
      }}
    >
      <FormLabel component="legend">Chart Navigation</FormLabel>
      <FormGroup>
        <FormControlLabel
        // classes={{root:  classes.icons, label: classes.icons}}
          control={
            <Checkbox 
            //  className={classes.icons}
            className={iconStyle({color:theme.palette.primary.main}).icons}
              checked={lineKeys[vaccine]}
              onChange={toogleChartKey}
              name={vaccine}
            />
          }
          label={vaccine}
        />
        <FormControlLabel
          control={
            <Checkbox
            className={iconStyle({color:'red'}).icons}
              checked={lineKeys[cases]}
              onChange={toogleChartKey}
              name={cases}
            />
          }
          label={cases}
        />
        <FormControlLabel
          control={
            <Checkbox
            className={iconStyle({color:'black'}).icons}
              checked={lineKeys[deaths]}
              onChange={toogleChartKey}
              name={deaths}
            />
          }
          label={deaths}
        />
        <FormControlLabel
          control={
            <Checkbox
            className={iconStyle({color:'green'}).icons}
              checked={lineKeys[recovered]}
              onChange={toogleChartKey}
              name={recovered}
            />
          }
          label={recovered}
        />
      </FormGroup>

      <Tabs
        classes={{
          indicator: classes.indicator,
        }}
        indicatorColor={"secondary"}
        value={tabIndex}
        onChange={handleChangeTabs}
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs on official countries"
        // className={classes.tabRoot}
      >
        {officialCountriesEntries.map((country, index) => (
          <Tab
            key={country[0]}
            onClick={() =>
              dispatch(
                setSelectedCountry({ fullName: country[1], code: country[0] })
              )
            }
            className={classes.tabs}
            variant="h5"
            align="center"
            label={country[1]}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.discardButton}
        disabled={!selectedCountry?.code}
        onClick={() => (
          dispatch(setSelectedCountry({ fullName: null, code: null })),
          setTabIndex(false)
        )}
      >
        Discard Country
      </Button>
    </FormControl>
  );
}
