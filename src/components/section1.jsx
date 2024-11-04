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
            bottom: "50.99%",
            left: "69.5%",
            transform: "translate(-50%, 50%)", 
            display: "flex",
            flexDirection: "column", 
            gap: "0px",
          }}
        >
          <Cards
            tit="Problema"
            desc="Focos de incêndio em habitats naturais não apenas consomem a flora e a fauna, mas também desestabilizam ecossistemas inteiros,
             ameaçando a sobrevivência das espécies e o equilíbrio da biodiversidade que sustenta a vida no planeta. "
          />
          <Cards
            tit="Solução"
            desc="Com nosso sistema de sensores de temperatura e umidade, transformamos a prevenção em ação,
             enviando alertas imediatos que capacitam comunidades e autoridades a agir rapidamente contra incêndios,
             salvando vidas e preservando os preciosos ecossistemas que sustentam nosso mundo."
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
          Tecnologia <br /> que<br/> <strong>Protege o Futuro</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
