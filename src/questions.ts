import { Categories, type Question } from "./helpers";

const questionTemplate: Question = {
  text: "question text?",
  direction: "column",
  minimumScoresRequiredToDisplayQuestion: {
    [Categories.category1]: undefined,
    [Categories.category2]: undefined,
    [Categories.category3]: undefined,
    [Categories.category4]: 30,
    [Categories.category5]: undefined,
    [Categories.category6]: undefined,
  },
  maximumScoresRequiredToDisplayQuestion: {
    [Categories.category1]: undefined,
    [Categories.category2]: undefined,
    [Categories.category3]: undefined,
    [Categories.category4]: 80,
    [Categories.category5]: undefined,
    [Categories.category6]: undefined,
  },
  options: [
    {
      text: "good answer",
      payload: {
        [Categories.category1]: undefined,
        [Categories.category2]: 10,
        [Categories.category3]: undefined,
        [Categories.category4]: 14,
        [Categories.category5]: undefined,
        [Categories.category6]: undefined,
      },
    },
    {
      text: "okay answer",
      payload: {
        [Categories.category1]: undefined,
        [Categories.category2]: undefined,
        [Categories.category3]: undefined,
        [Categories.category4]: 7,
        [Categories.category5]: undefined,
        [Categories.category6]: undefined,
      },
    },
    {
      text: "interesting answer",
      payload: {
        [Categories.category1]: undefined,
        [Categories.category2]: 2,
        [Categories.category3]: undefined,
        [Categories.category4]: 6,
        [Categories.category5]: undefined,
        [Categories.category6]: 9,
      },
    },
    {
      text: "bad answer",
      payload: {
        [Categories.category1]: undefined,
        [Categories.category2]: -19,
        [Categories.category3]: undefined,
        [Categories.category4]: -8,
        [Categories.category5]: undefined,
        [Categories.category6]: undefined,
      },
    },
  ],
};

export type AlternativeQuestion = {
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
  },
  {
    key: "better_memory",
    text: "Do you want to improve your memory to better recall important traditions and practices?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
  },
  {
    key: "improve_focus",
    text: "Do you want to improve your ability to focus to better appreciate cultural nuances in art and literature?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
  },
  {
    key: "problem_solving",
    text: "Do you want to improve your problem-solving abilities to better navigate cross-cultural dialogue?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
  },
  {
    key: "planning_organising",
    text: "Would you like to improve your planning and organising skills to better engage in cultural experiences and events?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
  },
  {
    key: "improve_creativity",
    text: "Do you want to improve your creativity to better appreciate and engage with diverse expressions and contribute to building a more inclusive society?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
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
  },
  {
    key: "surname_origin",
    text: "Do you know the origin of your surname?",
    direction: "row",
    options: [
      { text: "Yes", key: "yes" },
      { text: "No", key: "no" },
    ],
  },
];

export const questions = [
  {
    text: "question text?",
    direction: "column",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: 30,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: 80,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.category1]: undefined,
          [Categories.category2]: 10,
          [Categories.category3]: undefined,
          [Categories.category4]: 14,
          [Categories.category5]: undefined,
          [Categories.category6]: undefined,
        },
      },
      {
        text: "okay answer",
        payload: {
          [Categories.category1]: undefined,
          [Categories.category2]: undefined,
          [Categories.category3]: undefined,
          [Categories.category4]: 7,
          [Categories.category5]: undefined,
          [Categories.category6]: undefined,
        },
      },
      {
        text: "interesting answer",
        payload: {
          [Categories.category1]: undefined,
          [Categories.category2]: 2,
          [Categories.category3]: undefined,
          [Categories.category4]: 6,
          [Categories.category5]: undefined,
          [Categories.category6]: 9,
        },
      },
    ],
  },
  {
    text: "question 2 text?",
    direction: "row",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: 30,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: 80,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    options: [
      {
        text: "good answer",
        payload: {
          [Categories.category1]: 20,
          [Categories.category2]: undefined,
          [Categories.category3]: undefined,
          [Categories.category4]: undefined,
          [Categories.category5]: undefined,
          [Categories.category6]: undefined,
        },
      },
      {
        text: "bad answer",
        payload: {
          [Categories.category1]: -3,
          [Categories.category2]: undefined,
          [Categories.category3]: undefined,
          [Categories.category4]: undefined,
          [Categories.category5]: undefined,
          [Categories.category6]: undefined,
        },
      },
    ],
  },
];
