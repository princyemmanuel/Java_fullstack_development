import React from "react";
import {
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Mui() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Material UI</h1>
      <Button color="success">Login</Button>
      <Button color="secondary">Secondary</Button>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
      <Accordion>
      <AccordionSummary 
        >
          <h1>Accordion 2</h1>
        </AccordionSummary >
        <AccordionDetails><p>This is my Acccoordian</p></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <h1>Accordion 2</h1>
        </AccordionSummary>
        <AccordionDetails><p>This is my Acccoordian</p></AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Mui;
