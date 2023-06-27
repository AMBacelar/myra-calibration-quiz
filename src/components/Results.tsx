import React from "react";
import {
  ResponsiveContainer,
  Legend,
  RadialBarChart,
  RadialBar,
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
        width: 600,
        height: 400,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="80%"
          barSize={20}
          data={results}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="value"
          />
          <Legend
            iconSize={10}
            width={200}
            height={140}
            verticalAlign="middle"
            align="left"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
