import React from "react";
import { Box, Typography } from "@mui/material";
import Cards from "./Cards";

function Section1() {
  return (
   <Box id="home-section"
      sx={{
        backgroundColor: '#f5f5f5',
        width: "100%",
        height: '100vh',
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
          gap: '0px',
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "50.25%",
            left: "71.5%",
            transform: "translate(-50%, 50%)", 
            display: "flex",
            flexDirection: "column", 
            gap: "0px",
          }}
        >
          <Cards
            tit="Problema"
            desc="Os focos de incêndio consomem fauna e flora, de maneira a ameaçar a sobrevivência das espécies e o equilibrio da biodiversidade. "
            maxWidth= "450px"
          />
          <Cards
            tit="Solução"
            desc="O nosso sistema, transformamos a prevenção em ação,
             enviando alertas imediatos que capacitam comunidades e autoridades a agir rapidamente contra incêndios.."
              maxWidth= "450px"
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "52%", 
            left: "35%", 
            transform: "translate(-50%, 50%)", // Centraliza horizontal e verticalmente
            display: "flex",
            gap: "60px" 
          }}
        >
          <Typography style={{ fontSize: '100px', fontFamily: 'Quicksand, sans-serif' }}>
          Tecnologia <br /> que <br />protege  <strong> você </strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
