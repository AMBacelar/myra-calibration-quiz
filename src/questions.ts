import { Categories, ShowNotSureWrapper, type Question } from "./helpers";

const questionTemplate: Question = {
  text: "question text?",
  direction: "column",
  minimumScoresRequiredToDisplayQuestion: {
    [Categories.EXTRAVERSION]: undefined,
    [Categories.AGREEABLENESS]: undefined,
    [Categories.OPENNESS]: undefined,
    [Categories.CONSCIENTIOUSNESS]: 30,
    [Categories.NEUROTICISM]: undefined,
  },
  maximumScoresRequiredToDisplayQuestion: {
    [Categories.EXTRAVERSION]: undefined,
    [Categories.AGREEABLENESS]: undefined,
    [Categories.OPENNESS]: undefined,
    [Categories.CONSCIENTIOUSNESS]: 80,
    [Categories.NEUROTICISM]: undefined,
  },
  options: [
    {
      text: "good answer",
      payload: {
        [Categories.EXTRAVERSION]: undefined,
        [Categories.AGREEABLENESS]: 10,
        [Categories.OPENNESS]: undefined,
        [Categories.CONSCIENTIOUSNESS]: 14,
        [Categories.NEUROTICISM]: undefined,
      },
    },
    {
      text: "okay answer",
      payload: {
        [Categories.EXTRAVERSION]: undefined,
        [Categories.AGREEABLENESS]: undefined,
        [Categories.OPENNESS]: undefined,
        [Categories.CONSCIENTIOUSNESS]: 7,
        [Categories.NEUROTICISM]: undefined,
      },
    },
    {
      text: "interesting answer",
      payload: {
        [Categories.EXTRAVERSION]: undefined,
        [Categories.AGREEABLENESS]: 2,
        [Categories.OPENNESS]: undefined,
        [Categories.CONSCIENTIOUSNESS]: 6,
        [Categories.NEUROTICISM]: undefined,
      },
    },
    {
      text: "bad answer",
      payload: {
        [Categories.EXTRAVERSION]: undefined,
        [Categories.AGREEABLENESS]: -19,
        [Categories.OPENNESS]: undefined,
        [Categories.CONSCIENTIOUSNESS]: -8,
        [Categories.NEUROTICISM]: undefined,
      },
    },
  ],
  showNotSure: false,
};

export type AlternativeQuestion = ShowNotSureWrapper & {
  key: string;
  text: string;
  direction: string;
  options: {
    text: string;
    key: string;
  }[];
};
export const initialQuestions: AlternativeQuestion[] = [
  {
    key: "primary_goal",
    text: "What's your Primary Goal?",
    direction: "column",
    options: [
      { text: "Learn more about my culture", key: "learn_culture" },
      { text: "Keep my brain sharp", key: "brain_sharpness" },
      { text: "Discover new cultures", key: "new_culture" },
      { text: "Improve my empathy skills", key: "improve_empathy" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "better_memory",
    text: "Do you want to improve your memory to better recall important traditions and practices?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "improve_focus",
    text: "Do you want to improve your ability to focus to better appreciate cultural nuances in art and literature?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "problem_solving",
    text: "Do you want to improve your problem-solving abilities to better navigate cross-cultural dialogue?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "planning_organising",
    text: "Would you like to improve your planning and organising skills to better engage in cultural experiences and events?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "improve_creativity",
    text: "Do you want to improve your creativity to better appreciate and engage with diverse expressions and contribute to building a more inclusive society?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
];

export const finalQuestions: AlternativeQuestion[] = [
  {
    key: "ethnicity",
    text: "What is your Ethnicity?",
    direction: "column",
    options: [
      { text: "Arab, Middle East or North African", key: "arab" },
      { text: "Asian or Asian Pacific", key: "asian" },
      { text: "Black, Caribbean or African", key: "black" },
      { text: "Mixed or multiple ethnic groups", key: "mixed" },
      { text: "White", key: "white" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    key: "surname_origin",
    text: "Do you know the origin of your surname?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
];

export const questions: Question[] = [
  {
    text: "Test question with 3/1 answers",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "Answer 1",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 3",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "Test question with 3/2 answers",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "Answer 1",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 3",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "Test question with 3/3 answers",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "Answer 1",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 3",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "Flag Question",
    image: "/images/montserrat.png",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "okay answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "interesting answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "Who said?",
    metaText: `“The only thing necessary for the triumph of evil is for good men to do nothing.”`,
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "okay answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "interesting answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "Michael ________ was born 1958.",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "okay answer",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
  {
    text: "question 2 text?",
    direction: "row",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "bad answer",
        payload: {
          [Categories.EXTRAVERSION]: -3,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: true,
    showNotSureScore: {
      [Categories.EXTRAVERSION]: undefined,
      [Categories.AGREEABLENESS]: undefined,
      [Categories.OPENNESS]: undefined,
      [Categories.CONSCIENTIOUSNESS]: undefined,
      [Categories.NEUROTICISM]: undefined,
    },
  },
];
