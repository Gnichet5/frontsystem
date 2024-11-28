import React from "react";
import { Box, Typography } from "@mui/material";
import Cards from "./Cards";

function Section1() {
  return (
   <Box id="home-section"
      sx={{
        backgroundColor: '#f5f5f5',
        width: "100%",
        height: '92vh',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px', 
        position: "relative", 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "50.99%",
            left: "69.5%",
            transform: "translate(-50%, 50%)", 
            display: "flex",
            flexDirection: "column", 
            gap: "40px",
          }}
        >
          <Cards
            tit="Problema?"
            desc="Descrição bonitinha do bagulho das queimadas"
          />
          <Cards
            tit="Solução !"
            desc="Descrição bonitinha do nosso produto"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "53%", 
            left: "32%", 
            transform: "translate(-50%, 50%)", // Centraliza horizontal e verticalmente
            display: "flex",
            gap: "60px" 
          }}
        >
          <Typography style={{ fontSize: '100px', fontFamily: 'Quicksand, sans-serif' }}>
            Na busca  <br /> por  <br/> <strong>solução</strong>?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
