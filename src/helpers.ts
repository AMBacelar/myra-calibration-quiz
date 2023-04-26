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

export type ActiveScore = {
  [Categories.category1]: number;
  [Categories.category2]: number;
  [Categories.category3]: number;
  [Categories.category4]: number;
  [Categories.category5]: number;
  [Categories.category6]: number;
};

export const initialScore: ActiveScore = {
  [Categories.category1]: 50,
  [Categories.category2]: 50,
  [Categories.category3]: 50,
  [Categories.category4]: 50,
  [Categories.category5]: 50,
  [Categories.category6]: 50,
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

export const getNextQuestion = (
  _currentScore: ScoreModifierValues,
  pastQuestionIndex: number,
  questions: Question[]
):
  | false
  | {
      nextQuestion: Question;
      nextQuestionIndex: number;
    } => {
  const nextQuestion = questions[pastQuestionIndex + 1];
  if (nextQuestion !== undefined && nextQuestion !== null) {
    return {
      nextQuestion,
      nextQuestionIndex: pastQuestionIndex + 1,
    };
  } else {
    return false;
  }
};

export const updateScore = (
  currentScore: ActiveScore,
  optionPayload: ScoreModifierValues
): ActiveScore => {
  const newScore = {
    [Categories.category1]:
      optionPayload[Categories.category1] !== undefined
        ? currentScore[Categories.category1] +
          optionPayload[Categories.category1]
        : currentScore[Categories.category1],
    [Categories.category2]:
      optionPayload[Categories.category2] !== undefined
        ? currentScore[Categories.category2] +
          optionPayload[Categories.category2]
        : currentScore[Categories.category2],
    [Categories.category3]:
      optionPayload[Categories.category3] !== undefined
        ? currentScore[Categories.category3] +
          optionPayload[Categories.category3]
        : currentScore[Categories.category3],
    [Categories.category4]:
      optionPayload[Categories.category4] !== undefined
        ? currentScore[Categories.category4] +
          optionPayload[Categories.category4]
        : currentScore[Categories.category4],
    [Categories.category5]:
      optionPayload[Categories.category5] !== undefined
        ? currentScore[Categories.category5] +
          optionPayload[Categories.category5]
        : currentScore[Categories.category5],
    [Categories.category6]:
      optionPayload[Categories.category6] !== undefined
        ? currentScore[Categories.category6] +
          optionPayload[Categories.category6]
        : currentScore[Categories.category6],
  };

  console.log("new score is:", newScore);
  return newScore;
};
