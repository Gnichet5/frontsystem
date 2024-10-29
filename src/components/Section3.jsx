import React from "react";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import Cards from "./Cards";
import Objeto from "./Objeto";

function Section3() {

    return (
      <Box id="product-section"
          sx={{
            backgroundColor: '#f5f5f5',
            width: "100%",
            height: "115vh",
            position: "relative",
            display: "flex",
          }}
        >
      
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Objeto />
          </Box>

          <Box sx={{ width: "50%", height: "100%" }} />

          <Box
          sx={{
            position: "absolute",
            bottom: "54.99%",
            left: "69.9%",
            transform: "translate(-50%, 50%)", 
            display: "flex",
            flexDirection: "column", 
            gap: "10px",
          }}
        >
          <Cards
            tit="Como funciona?"
            desc="Descrição bonitinha do bagulho das queimadas"
          />
          <Cards
            tit="Componentes"
            desc="Descrição bonitinha do nosso produto"
          />

<Cards
            tit="Área de atuação"
            desc="Descrição bonitinha do nosso produto"
          />
        </Box>

        </Box>
      );
    }
    
    export default Section3;