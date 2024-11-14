import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: 0, value: 1500 },
  { time: 10, value: 1400 },
  { time: 20, value: 1000 },
  // Adicione mais pontos conforme necessário
];

const LineGraph = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" label={{ value: "Tempo", position: "insideBottomRight", offset: -5 }} />
      <YAxis label={{ value: "Valor", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#000000" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default LineGraph;
