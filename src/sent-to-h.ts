export enum Categories {
  category1 = "CATEGORY1",
  category2 = "CATEGORY2",
  category3 = "CATEGORY3",
  category4 = "CATEGORY4",
  category5 = "CATEGORY5",
  category6 = "CATEGORY6",
}

export type ScoreModifierValues = {
  [Categories.category1]: undefined | number;
  [Categories.category2]: undefined | number;
  [Categories.category3]: undefined | number;
  [Categories.category4]: undefined | number;
  [Categories.category5]: undefined | number;
  [Categories.category6]: undefined | number;
};
type Options = {
  text: string;
  payload: ScoreModifierValues;
};
export type Question = {
  text: string;
  image?: string;
  minimumScoresRequiredToDisplayQuestion: ScoreModifierValues;
  maximumScoresRequiredToDisplayQuestion: ScoreModifierValues;
  options: Options[];
};

// all you need to edit is below this line
// these will be the questions, and they will (for now) be in this order

export const questions: Question[] = [
  {
    text: "this is the question text",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: undefined,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: undefined,
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
  },
  {
    text: "question text?",
    minimumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: undefined,
      [Categories.category5]: undefined,
      [Categories.category6]: undefined,
    },
    maximumScoresRequiredToDisplayQuestion: {
      [Categories.category1]: undefined,
      [Categories.category2]: undefined,
      [Categories.category3]: undefined,
      [Categories.category4]: undefined,
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
  },
];
