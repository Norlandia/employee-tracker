import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const AgeGraph = ({ ages, show }) => {
  const isVisible = () => {
    return show ? 'graph-container graph-visible' : 'graph-container graph-hide';
  };

  return (
   
      <div className={isVisible()}>
        <BarChart
          width={600}
          height={300}
          data={ages}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="age" />
          <YAxis width={2} ticks={[...ages.map((e) => e.count)]} />
          <Tooltip cursor={{ fill: '#B5DEF3' }} />
          <Bar dataKey="count" fill="#0984C3" />
        </BarChart>
      </div>
  );
};

export default AgeGraph;
