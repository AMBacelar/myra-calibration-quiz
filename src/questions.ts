import { Categories, type Question } from "./helpers";

const questionTemplate: Question = {
  text: "question text?",
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

export const questions = [questionTemplate];
