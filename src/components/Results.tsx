import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { ActiveScore, Categories } from "~/helpers";

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

export const Results = ({ data }: any) => {
  const results = getsScore(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="You"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
