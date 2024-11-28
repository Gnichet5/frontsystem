import React from "react";
import { Box, Typography } from "@mui/material";

function Section4 (){
    return (
    <Box
      id="Código"
      sx={{
        backgroundColor: "#00000",
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",      
      }}
    >
    <Box
        sx={{
          width: "640px",          
          height: "640px",         
          backgroundColor: "#ffffff",  
          borderRadius: "5px",     
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  
          padding: "3px",          
        }}
      >
        <iframe
          src="https://wokwi.com/projects/411294519932756993"
          title="Simulador Wokwi"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        />
      </Box>
    </Box>
  );
     
    }



export default Section4;