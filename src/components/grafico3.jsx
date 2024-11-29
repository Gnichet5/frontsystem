import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const scatterData = [
  { year: 1998, value: 20000 },
  { year: 1999, value: 25000 },
  { year: 2000, value: 15000 },
  { year: 2001, value: 18000 },
  { year: 2002, value: 40000 },
  { year: 2003, value: 45000 },
  { year: 2004, value: 38000 },
  { year: 2005, value: 65000 },
  { year: 2006, value: 45000 },
  { year: 2007, value: 50000 },
  { year: 2008, value: 20000 },
  { year: 2009, value: 15000 },
  { year: 2010, value: 40000 },
  { year: 2011, value: 10000 },
  { year: 2012, value: 10000 },
  { year: 2013, value: 20000 },
  { year: 2014, value: 30000 },
  { year: 2015, value: 25000 },
  { year: 2016, value: 30000 },
  { year: 2017, value: 30000 },
  { year: 2018, value: 15000 },
  { year: 2019, value: 30000 },
  { year: 2020, value: 35000 },
  { year: 2021, value: 30000 },
  { year: 2022, value: 40000 },
  { year: 2023, value: 20000 },
  { year: 2024, value: 45000 }
];

const ScatterPlot = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis dataKey="year" label={{ value: "Ano", position: "insideBottomRight", offset: -5 }} />
      <YAxis dataKey="value" label={{ value: "Focos de Queimada", angle: -90, position: "insideLeft" }} />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="Focos" data={scatterData} fill="#000000" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ScatterPlot;
