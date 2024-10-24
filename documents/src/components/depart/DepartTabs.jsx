import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pastoral from "./departs/Postoral"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 600,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="w-48 tabs-header"
      >
        <Tab label="Pastoral" {...a11yProps(0)} />
        <Tab label="Culte" {...a11yProps(1)} />
        <Tab label="Programme" {...a11yProps(2)} />
        <Tab label="Communication" {...a11yProps(3)} />
        <Tab label="Social" {...a11yProps(4)} />
        <Tab label="Couple" {...a11yProps(5)} />
        <Tab label="Mamans" {...a11yProps(6)} />
        <Tab label="Ecodim" {...a11yProps(6)} />
        <Tab label="Intercession" {...a11yProps(6)} />
        <Tab label="Evangelisation" {...a11yProps(6)} />
        <Tab label="Technique" {...a11yProps(6)} />
        <Tab label="Décoration" {...a11yProps(6)} />
        <Tab label="Nettoyage" {...a11yProps(6)} />
        <Tab label="Protocole" {...a11yProps(6)} />
        <Tab label="Chorale" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} className="w-full">
        <Pastoral />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
