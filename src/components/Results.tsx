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

const results = [
  {
    subject: "Extraversion",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Agreeableness",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Openness",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Conscientiousness",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Neuroticism",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

// const getsScore = (results: ActiveScore): ActiveScore => ({
//   [Categories.EXTRAVERSION]: results[Categories.EXTRAVERSION],
//   [Categories.AGREEABLENESS]: results[Categories.AGREEABLENESS],
//   [Categories.OPENNESS]: results[Categories.OPENNESS],
//   [Categories.CONSCIENTIOUSNESS]: results[Categories.CONSCIENTIOUSNESS],
//   [Categories.NEUROTICISM]: results[Categories.NEUROTICISM],
// });

export const Results = ({ data }: any) => {
  // const results = getsScore(data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
