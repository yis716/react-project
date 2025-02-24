import React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Letter1 from "./Letter1";
import Letter2 from "./Letter2";
import Letter3 from "./Letter3";
import "../subcss/Letter.css";


function Letter(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="subnav">
      <h3>국민참여</h3>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={<h4 style={{ color: "#333" }}>기상민원</h4>} value="1" />
              <Tab label={<h4 style={{ color: "#333" }}>국민행복제안</h4>} value="2" />
              <Tab label={<h4 style={{ color: "#333" }}>민원이용안내</h4>} value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Letter1 />
          </TabPanel>
          <TabPanel value="2">
            <Letter2 />
          </TabPanel>
          <TabPanel value="3">
            <Letter3 />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Letter;
