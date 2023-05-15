export enum Categories {
  EXTRAVERSION = "Extraversion",
  AGREEABLENESS = "Agreeableness",
  OPENNESS = "Openness",
  CONSCIENTIOUSNESS = "Conscientiousness",
  NEUROTICISM = "Neuroticism",
}

export type ScoreModifierValues = {
  [Categories.EXTRAVERSION]: undefined | number;
  [Categories.AGREEABLENESS]: undefined | number;
  [Categories.OPENNESS]: undefined | number;
  [Categories.CONSCIENTIOUSNESS]: undefined | number;
  [Categories.NEUROTICISM]: undefined | number;
};

export type ActiveScore = {
  [Categories.EXTRAVERSION]: number;
  [Categories.AGREEABLENESS]: number;
  [Categories.OPENNESS]: number;
  [Categories.CONSCIENTIOUSNESS]: number;
  [Categories.NEUROTICISM]: number;
};

export const initialScore: ActiveScore = {
  [Categories.EXTRAVERSION]: 50,
  [Categories.AGREEABLENESS]: 50,
  [Categories.OPENNESS]: 50,
  [Categories.CONSCIENTIOUSNESS]: 50,
  [Categories.NEUROTICISM]: 50,
};

type DoNotShowNext = {
  showNext: false;
};

type ShowNext = {
  showNext: true;
  showNextScore: ScoreModifierValues;
};

export type ShowNextWrapper = ShowNext | DoNotShowNext;
type Options = {
  text: string;
  payload: ScoreModifierValues;
};
export type Question = ShowNextWrapper & {
  text: string;
  metaText?: string;
  image?: string;
  direction: string;
  minimumScoresRequiredToDisplayQuestion: ScoreModifierValues;
  maximumScoresRequiredToDisplayQuestion: ScoreModifierValues;
  options: Options[];
};

export const getNextQuestion = <T>(
  pastQuestionIndex: number,
  questions: T[]
):
  | false
  | {
      nextQuestion: T;
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
    [Categories.EXTRAVERSION]:
      optionPayload[Categories.EXTRAVERSION] !== undefined
        ? currentScore[Categories.EXTRAVERSION] +
          optionPayload[Categories.EXTRAVERSION]
        : currentScore[Categories.EXTRAVERSION],
    [Categories.AGREEABLENESS]:
      optionPayload[Categories.AGREEABLENESS] !== undefined
        ? currentScore[Categories.AGREEABLENESS] +
          optionPayload[Categories.AGREEABLENESS]
        : currentScore[Categories.AGREEABLENESS],
    [Categories.OPENNESS]:
      optionPayload[Categories.OPENNESS] !== undefined
        ? currentScore[Categories.OPENNESS] + optionPayload[Categories.OPENNESS]
        : currentScore[Categories.OPENNESS],
    [Categories.CONSCIENTIOUSNESS]:
      optionPayload[Categories.CONSCIENTIOUSNESS] !== undefined
        ? currentScore[Categories.CONSCIENTIOUSNESS] +
          optionPayload[Categories.CONSCIENTIOUSNESS]
        : currentScore[Categories.CONSCIENTIOUSNESS],
    [Categories.NEUROTICISM]:
      optionPayload[Categories.NEUROTICISM] !== undefined
        ? currentScore[Categories.NEUROTICISM] +
          optionPayload[Categories.NEUROTICISM]
        : currentScore[Categories.NEUROTICISM],
  };

  console.log("new score is:", newScore);
  return newScore;
};
