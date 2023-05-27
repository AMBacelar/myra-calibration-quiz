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
    text: "If you had to be one extreme weather type which one would it be?",
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
        text: "Rain",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Snow",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Hail",
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
    text: "If you had to chose to live in one of these houses and locations, which one would it be?",
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
        text: "Cabin in the Woods",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Mansion on a Deserted Island",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Penthouse in the South Pole",
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
    text: "What would you rather?",
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
        text: "Super Car but not allowed friends",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Private Jet with an irate partner",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Walk anywhere with Anyone",
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
    text: "Flag Question 1 ",
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
    text: "Flag Question 2 ",
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
    text: "Flag Question 3 ",
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
    text: "Flag Question 4 ",
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
    text: "Who said? 1",
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
    text: "Who said? 2",
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
    text: "Who said? 3",
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
    text: "Who said? 4",
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
    text: "1 Michael ________ was born 1958.",
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
    text: "2 Michael ________ was born 1958.",
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
    text: "3 Michael ________ was born 1958.",
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
    text: "maths question 1?",
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
        text: "answer 1",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: -3,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "maths question 2?",
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
        text: "answer 1",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: -3,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "maths question 3?",
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
        text: "answer 1",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "answer 2",
        payload: {
          [Categories.EXTRAVERSION]: -3,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "Rate yourself 1",
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
        text: "Excellent",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Above Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Below Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,

  },
  {
    text: "Rate yourself 2",
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
        text: "Excellent",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Above Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Below Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,

  },
  {
    text: "Rate yourself 3",
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
        text: "Excellent",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Above Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Below Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,

  },
  {
    text: "Rate yourself 4",
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
        text: "Excellent",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Above Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Below Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,

  },
  {
    text: "Rate yourself 5",
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
        text: "Excellent",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Above Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Below Average",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,

  },

  
];
