import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { type ActiveScore, Categories } from "~/helpers";

const getsScore = (results: ActiveScore) => [
  {
    value: results[Categories.EXTRAVERSION],
    name: Categories.EXTRAVERSION,
    fill: "#FF1744",
  },
  {
    value: results[Categories.AGREEABLENESS],
    name: Categories.AGREEABLENESS,
    fill: "#00CC00",
  },
  {
    value: results[Categories.OPENNESS],
    name: Categories.OPENNESS,
    fill: "#FF6F00",
  },
  {
    value: results[Categories.CONSCIENTIOUSNESS],
    name: Categories.CONSCIENTIOUSNESS,
    fill: "#2F80ED",
  },
  {
    value: results[Categories.NEUROTICISM],
    name: Categories.NEUROTICISM,
    fill: "#990000",
  },
];

export const Results = ({ data }: { data: ActiveScore }) => {
  const results = getsScore(data);
  return (
    <div
      style={{
        width: 700,
        height: 500,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={results}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="category" dataKey="name" />
          <XAxis type="number" dataKey="value" />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
