import React, { useState } from "react";
import Header from "./Header";
import General from "./General/General";
import Security from "./Security/Security";
import Nuclear from "./Nuclear/Nuclear";
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export default function AccountView() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState("general");
  const tabs = [
    { value: "general", label: "General" },
    { value: "security", label: "Security" },
    { value: "nuclear", label: "Nuclear" },
  ];
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
            className={classes.tabs}
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === "general" && <General />}
          {currentTab === "security" && <Security />}
          {currentTab === "nuclear" && <Nuclear />}
        </Box>
      </Container>
    </div>
  );
}
