import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 1998, value: 580 },
  { year: 1999, value: 1210 },
  { year: 2000, value: 915 },
  { year: 2001, value: 587 },
  { year: 2002, value: 909 },
  { year: 2003, value: 1194 },
  { year: 2004, value: 1012 },
  { year: 2005, value: 1161 },
  { year: 2006, value: 1096 },
  { year: 2007, value: 754 },
  { year: 2008, value: 489 },
  { year: 2009, value: 347 },
  { year: 2010, value: 2444 },
  { year: 2011, value: 1159 },
  { year: 2012, value: 521 },
  { year: 2013, value: 602 },
  { year: 2014, value: 1440 },
  { year: 2015, value: 627 },
  { year: 2016, value: 840 },
  { year: 2017, value: 734 },
  { year: 2018, value: 350 },
  { year: 2019, value: 1111 },
  { year: 2020, value: 2277 },
  { year: 2021, value: 742 },
  { year: 2022, value: 315 },
  { year: 2023, value: 352 },
  { year: 2024, value: 3483 }
];

const BarGraph = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" label={{ value: "Ano", position: "insideBottomRight", offset: -5 }} />
      <YAxis label={{ value: "Focos de Queimada", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#000000" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarGraph;
