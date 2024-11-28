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
            height: "100vh",
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
            bottom: "55%",
            left: "70%",
            transform: "translate(-50%, 50%)", 
            display: "flex",
            flexDirection: "column", 
            gap: "10px",
          }}
        >
          <Cards
            tit="Como funciona?"
            desc="Utilizando de sensores especializados na captação de temperatura e umidade, o sistema é capaz de realizar um monitoramento em tempo real e enviar alertas para contramedidas."
          />
          <Cards
            tit="Componentes"
            desc=" A combinação do sensor DHT22 para monitoramento de temperatura e umidade, o buzzer para alertar sobre incêndios e o microcontrolador para processar os dados e executar ações, proporciona uma solução eficaz para a detecção e mitigação de incêndios em ambientes naturais e florestais."
          />


        </Box>

        </Box>
      );
    }
    
    export default Section3;