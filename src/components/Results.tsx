import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { type ActiveScore, Categories } from "~/helpers";

const getsScore = (results: ActiveScore) => [
  { A: results[Categories.EXTRAVERSION], subject: Categories.EXTRAVERSION },
  { A: results[Categories.AGREEABLENESS], subject: Categories.AGREEABLENESS },
  { A: results[Categories.OPENNESS], subject: Categories.OPENNESS },
  {
    A: results[Categories.CONSCIENTIOUSNESS],
    subject: Categories.CONSCIENTIOUSNESS,
  },
  { A: results[Categories.NEUROTICISM], subject: Categories.NEUROTICISM },
];

export const Results = ({ data }: { data: ActiveScore }) => {
  const results = getsScore(data);
  return (
    <div
      style={{
        width: "100%",
        height: 300,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            name="You"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
