"use client";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from "react";
import { FeedbackContainer } from "../components/feedback-container";

function Home() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
  <Box sx={{ width: '100%', typography: 'body1', padding:"10px"}}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex",   alignContent:"center"  }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="LOGS" value="1" />
          <Tab label="COMMENTS" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
    </TabContext>
  </Box>

    
      <FeedbackContainer />

    </>
);
}
export default Home;

