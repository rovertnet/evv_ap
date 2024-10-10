import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Membres from "../members/Membre";

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
        className="w-48"
      >
        <Tab label="Pastoral" {...a11yProps(0)} className="text-left" />
        <Tab label="Culte" {...a11yProps(1)} className="text-left" />
        <Tab label="Programme" {...a11yProps(2)} className="text-left" />
        <Tab label="Communication" {...a11yProps(3)} className="text-left" />
        <Tab label="Social" {...a11yProps(4)} className="text-left" />
        <Tab label="Couple" {...a11yProps(5)} className="text-left" />
        <Tab label="Mamans" {...a11yProps(6)} className="text-left" />
        <Tab label="Ecodim" {...a11yProps(6)} className="text-left" />
        <Tab label="Intercession" {...a11yProps(6)} className="text-left" />
        <Tab label="Evangelisation" {...a11yProps(6)} className="text-left" />
        <Tab label="Technique" {...a11yProps(6)} className="text-left" />
        <Tab label="Décoration" {...a11yProps(6)} className="text-left" />
        <Tab label="Nettoyage" {...a11yProps(6)} className="text-left" />
        <Tab label="Protocole" {...a11yProps(6)} className="text-left" />
        <Tab label="Chorale" {...a11yProps(6)} className="text-left" />
      </Tabs>
      <TabPanel value={value} index={0} className="w-full">
        <Membres />
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
