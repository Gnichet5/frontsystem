import React from "react";
import { Box, Typography } from "@mui/material";
import Graf from "./grafico1";
import ScatterPlot from "./grafico3";
import BarGraph from "./grafico2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cards from "./Cards";
import { Line } from "react-chartjs-2";


function Section2() {
  return (
    <Box
      id="charts-section"
      sx={{
        backgroundColor: 'black',
        width: "100%",
        height: "120vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '800px',
          transform: "translateY(-10%)",
          marginTop: '70px'
        }}
      >
        <Box 
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Cards
            tit="Situação"
            desc="O aumento das queimadas traz uma catástrofe silenciosa, consumindo a vida selvagem e a segurança alimentar."
            maxWidth= "370px"
          />
          <Cards
            tit="Consequência"
            desc="As queimadas afetam diretamente a saúde da população e a vida selvagem, poluindo o nosso ar."
            maxWidth= "400px"
          />
        </Box>

        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Crescimento das ocorrências
        </Typography>

        <Box sx={{ marginTop: '20px' }}>
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <Graf />
            </SwiperSlide>
            <SwiperSlide>
              <ScatterPlot /> 
            </SwiperSlide>  
            <SwiperSlide>
            <BarGraph/>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

export default Section2;
