"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { FeedbackContainer } from "../components/feedback-container";
import LogPost from "../components/log/logPost";
import { useEffect, useState } from 'react';
import CommentPost from "../components/comment/commentPost";

function Home() {
  const [value, setValue] = React.useState("1");
  const [logs, setLogs] = React.useState([]);
  const [comments, setComments] = useState([])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch("/api/[log]/logs?url=http://localhost:3000/p1", {
          method: "GET",
          query: {url: "http://localhost:3000"},
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
        setLogs(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLogs();
  }, []);



  useEffect(() => {
    const handleGetData = async () => {
      const pageUrl = window.location.href;
  
  
      const response = await fetch("/api/getData", {
        method: "post",
        body: pageUrl,
      });
      const data  = await response.json();
      console.log("response", data);
      setComments(data);
  
    };
    handleGetData();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1", padding: "10px"}}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignContent: "center",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="LOGS" value="1" />
              <Tab label="COMMENTS" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
          <LogPost  logs={logs}/>
          </TabPanel>
          <TabPanel value="2">

        <CommentPost comments= {comments}/>
        
          </TabPanel>
        </TabContext>
      </Box>

      <FeedbackContainer />
    </>
  );
}
export default Home;
