import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const AgeGraph = ({ ages }) => {
  return (
    <div className="graph-container">
      <BarChart
        width={600}
        height={300}
        data={ages}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="age" />
        <YAxis ticks={[...ages.map((e) => e.count)]} />
        <Tooltip cursor={{fill:"#B5DEF3"}}/>
        <Bar dataKey="count" fill="#0984C3" />
      </BarChart>
    </div>
  );
};

export default AgeGraph;

