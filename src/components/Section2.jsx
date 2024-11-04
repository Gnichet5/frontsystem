import React from "react";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import Cards from "./Cards";

function Section2() {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    xaxis: { categories: ["2020", "2021", "2022", "2023"] },
    dataLabels: { enabled: false },
    colors: ['#000000'],
  };

  const chartSeries = [{ name: "Desempenho", data: [10, 20, 30, 40] }];

  return (
 <Box id="charts-section"
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
            desc="O aumento das queimadas provoca uma catástrofe silenciosa: a extinção de espécies animais e a destruição de colheitas essenciais. 
            Cada incêndio não apenas consome a vida selvagem, mas também arrisca a segurança alimentar de comunidades."
          />
          <Cards
            tit="Consequência"
            desc="As queimadas estão se tornando uma emergência real, afetando diretamente a saúde da população e a vida selvagem. 
            A fumaça tóxica polui o ar que respiramos, causando doenças respiratórias e aumentando o sofrimento das comunidades "
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
<Box> </Box>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={350}
        />
      </Box>
    </Box>
  );
}

export default Section2;
