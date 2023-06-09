import { Categories, type ShowNotSureWrapper, type Question } from "./helpers";

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
    text: "What is your Primary Goal?",
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
    text: "Improve your memory recall for traditions and practices?",
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
    text: "Improve your ability to appreciate cultural nuances?",
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
    text: "Improve your ability to navigate cross-cultural dialogue?",
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
    text: "Improve your engagement in cultural experiences and events?",
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
    text: "Improve your outlook on a more inclusive society?",
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
    text: "What is your ethnicity?",
    direction: "column",
    options: [
      { text: "Arab, Middle East or North African", key: "arab" },
      { text: "Asian or Asian Pacific", key: "asian" },
      { text: "Black, Caribbean or African", key: "black" },
      { text: "Mixed or Multiple ethnic groups", key: "mixed" },
      { text: "White, Caucasian or European groups", key: "white" },
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
    text: "Pick one extreme weather type you would be",
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
    showNotSure: false,
  },
  {
    text: "Pick where you would live",
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
        text: "Cabin in The Woods",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Mansion on Desert Island",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Penthouse in South Pole",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 2,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 6,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "Pick One",
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
        text: "Super Car with no friends",
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
    showNotSure: false,
  },
  {
    text: "Name the Flag?",
    image: "/images/cn.svg",
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
        text: "America",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "South Korea",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "China",
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
    text: "Name the Flag",
    image: "/images/cu.svg",
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
        text: "Cuba",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Brazil",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Barbados",
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
    text: "Name the Flag",
    image: "/images/za.svg",
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
        text: "India",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "South Africa",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Mexico",
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
    text: "Name the Flag",
    image: "/images/ms.svg",
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
        text: "Australia",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Montserrat",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Fiji",
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
    text: "Who said",
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
        text: "Edmund Burke",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Lord Acton",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "Who said",
    metaText: `“I have not failed. I've just found 10,000 ways that won't work.”`,
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
        text: "Peter Drucker",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Thomas Edison",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "Who said",
    metaText: `“Government of the people, by the people, for the people, shall not perish from the earth.”`,
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
        text: "Thomas Jefferson",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Abraham Lincoln",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },
  {
    text: "Who said",
    metaText: `“In the end, we will remember not the words of our enemies, but the silence of our friends.”`,
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
        text: "Martin Luther King Jr",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Mahatma Gandhi",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 7,
          [Categories.NEUROTICISM]: undefined,
        },
      },
    ],
    showNotSure: false,
  },

  {
    text: "Michael ___ was born 1958.",
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
        text: "Jordan",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Jackson",
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
    text: "We ___ how far you have come.",
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
        text: "Appreciate",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Respect",
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
    text: "Mankind is the ___ of all its misfortune.",
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
        text: "Root",
        payload: {
          [Categories.EXTRAVERSION]: undefined,
          [Categories.AGREEABLENESS]: 10,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: 14,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "Sum",
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
    text: "How many hours are in a minute?",
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
        text: "0.016",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "1.6%",
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
    text: "1 Royal cubits =",
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
        text: "21 inches",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "54cm",
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
    text: "What is pi π?",
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
        text: "3.141",
        payload: {
          [Categories.EXTRAVERSION]: 20,
          [Categories.AGREEABLENESS]: undefined,
          [Categories.OPENNESS]: undefined,
          [Categories.CONSCIENTIOUSNESS]: undefined,
          [Categories.NEUROTICISM]: undefined,
        },
      },
      {
        text: "3.411",
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
    text: "Rate your ability to recognise when you feel more special or better than others",
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
    text: "Rate your ability to understand and relate to the feelings of others",
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
    text: "Rate your ability to be happy for others' success and achievements",
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
    text: "Rate your ability to show empathy and compassion towards others",
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
    text: "Rate your ability to handle feedback or criticism in a mature and constructive way",
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
