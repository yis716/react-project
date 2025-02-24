import React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import "../subcss/About.css";

function About(props) {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="subnav">
            <h3>기관소개</h3>
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={<h4 style={{ color: "#333" }}>기관장소개</h4>} value="1" />
                        <Tab label={<h4 style={{ color: "#333" }}>기관연혁</h4>} value="2" />
                        <Tab label={<h4 style={{ color: "#333" }}>오시는길</h4>} value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <About1 />
                    </TabPanel>
                    <TabPanel value="2">
                        <About2 />
                    </TabPanel>
                    <TabPanel value="3">
                        <About3 />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}

export default About;
