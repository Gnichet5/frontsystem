import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const scatterData = [
  { x: 10000, y: 50 },
  { x: 15000, y: 80 },
  { x: 20000, y: 100 },

];

const ScatterPlot = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis dataKey="x" label={{ value: "Ha", position: "insideBottomRight", offset: -5 }} />
      <YAxis dataKey="y" label={{ value: "Quantidade de focos", angle: -90, position: "insideLeft" }} />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="Focos" data={scatterData} fill="#000000" />
    </ScatterChart>
  </ResponsiveContainer>
);

export default ScatterPlot;
